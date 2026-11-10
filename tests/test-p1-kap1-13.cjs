const fs=require('fs'),vm=require('vm'),assert=require('assert');
(async()=>{
const {parseHTML}=await import(require('url').pathToFileURL(require('path').join(require('path').dirname(require.resolve('linkedom/package.json',{paths:[__dirname,process.env.TEST_DEPENDENCIES || __dirname]})),'esm/index.js')).href);
const html=fs.readFileSync('p1-kapitel-1-13-testprov-v8m3q6.html','utf8');
const raw=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
function setup(){
 const {document,window}=parseHTML(html),stored=new Map(),sent=[],downloads=[];let copied='';
 const context={document,window:{location:{pathname:'/p1-kapitel-1-13-testprov-v8m3q6.html'},scrollTo(){}},localStorage:{getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)},Math,Date,console,Blob,URL:{createObjectURL:b=>(downloads.push(b),'blob:test'),revokeObjectURL(){}},setTimeout:f=>f(),navigator:{clipboard:{writeText:async t=>{copied=t}}},fetch:async(url,options)=>{sent.push({url,...options});return {type:'opaque'}}};
 // Expose closure state in the test context only, never in the shipped HTML.
 const injected=raw.replace('loadSaved();','globalThis.api={shuffleQuestions,grade,questions,get quizQuestions(){return quizQuestions},get answers(){return answers},set current(v){current=v},get current(){return current},get markdown(){return markdownResult},STORAGE_KEY};loadSaved();');
 vm.createContext(context);vm.runInContext(injected,context);return {...context,api:context.api,stored,sent,downloads,copy:()=>copied,click:id=>document.getElementById(id).click(),input:(name)=>{document.getElementById('student-name').value=name}};
}
(async()=>{
 let t=setup();const originals=JSON.stringify(t.api.questions);const orders=new Set();
 for(let n=0;n<1000;n++){
  t.api.shuffleQuestions();const a=t.api.quizQuestions;assert.equal(a.length,20);assert.equal(new Set(a.map(q=>q.id)).size,20);
  const counts=[0,0,0,0];a.forEach(q=>{counts[q.answer]++;const src=t.api.questions[q.sourceIndex-1];assert.equal(q.options[q.answer],src.options[src.answer]);assert.equal(new Set(q.options).size,4);assert(q.chapter>=1&&q.chapter<=13);});assert.deepEqual(counts,[5,5,5,5]);orders.add(a.map(q=>q.id+q.answer).join());
 }
 assert.equal(orders.size,1000);assert.equal(JSON.stringify(t.api.questions),originals);
 t.click('start-button');assert.match(t.document.getElementById('name-status').textContent,/förnamn/);assert(!t.document.getElementById('intro-view').classList.contains('hidden'));
 t.input('   ');t.click('start-button');assert(!t.document.getElementById('intro-view').classList.contains('hidden'));
 t.input('Verifiering');t.click('start-button');t.click('next-button');assert.equal(t.api.current,0);assert.match(t.document.getElementById('status-message').textContent,/Välj/);assert(!t.document.getElementById('result-view').classList.contains('hidden')===false);
 t.api.grade();assert.equal(t.sent.length,0);
 // A hidden unanswered answer must still block grading even if the last one is filled.
 t.api.answers[19]=t.api.quizQuestions[19].answer;t.api.current=19;t.api.grade();assert.equal(t.sent.length,0);assert.equal(t.api.current,0);assert.match(t.document.getElementById('status-message').textContent,/Besvara först/);
 t.api.quizQuestions.forEach((q,i)=>t.api.answers[i]=q.answer);t.api.current=19;t.api.grade();await Promise.resolve();assert.match(t.document.getElementById('result-score').textContent,/20 av 20 rätt · 100 %/);assert.equal(t.sent.length,1);const payload=JSON.parse(t.sent[0].body);
 assert.deepEqual(Object.keys(payload).sort(),['type','testId','studentName','score','total','percent','recommendations','pagePath'].sort());assert.equal(payload.testId,'kapitel-1-13-v8m3q6');assert.equal(payload.score,20);assert.equal(t.sent[0].headers['Content-Type'],'text/plain;charset=utf-8');assert(!('answers' in payload));
 assert.equal(t.stored.size,1);const saved=JSON.parse(t.stored.get(t.api.STORAGE_KEY));assert.equal(saved.score,20);assert.equal(saved.total,20);assert.equal(saved.markdown,t.api.markdown);assert.match(saved.markdown,/Inga felaktiga svar/);assert.equal(t.document.querySelectorAll('.review-item').length,0);
 t.click('download-md-button');assert.equal(await t.downloads[0].text(),t.api.markdown);t.click('copy-button');await Promise.resolve();assert.equal(t.copy(),t.document.getElementById('summary-text').value);
 t=setup();t.input('Blandat');t.click('start-button');t.api.quizQuestions.forEach((q,i)=>t.api.answers[i]=i%2?q.answer:(q.answer+1)%4);t.api.current=19;t.api.grade();await Promise.resolve();assert.match(t.document.getElementById('result-score').textContent,/10 av 20 rätt · 50 %/);assert.equal(t.document.querySelectorAll('.review-item').length,10);assert(t.document.querySelectorAll('#practice-recommendations li').length<=3);assert(t.document.querySelectorAll('#chapter-recommendations li').length<=3);
 t.api.quizQuestions.filter((q,i)=>i%2===0).forEach(q=>{assert(t.api.markdown.includes(q.prompt));assert(t.api.markdown.includes(q.explanation));if(q.code){assert(t.api.markdown.includes(q.code));assert([...t.document.querySelectorAll('.review-item pre')].some(p=>p.textContent===q.code));}});
 assert.equal(JSON.parse(t.sent[0].body).score,10);
 // Unknown IDs must never be routed to an old result sheet. Existing routes stay compatible.
 const code=fs.readFileSync('apps-script/prog1-testprov-routing.gs','utf8'),rows=[];const sheets={'Testprov 1-7':{appendRow:r=>rows.push({sheet:'old',r})},'Testprov 1-13 v8m3q6':{appendRow:r=>rows.push({sheet:'new',r})}};
 const gas={SpreadsheetApp:{openById:id=>(assert.equal(id,'1yOomIA71hwPQGVFRww6OgF5Arm2Vym79y2sZ7_Fk9P4'),{getSheetByName:n=>sheets[n]})},ContentService:{createTextOutput:x=>x},LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},console};vm.createContext(gas);vm.runInContext(code,gas);
 const base={studentName:'TEST',score:12,recommendations:'Öva loopar'};assert.equal(gas.saveTestSummary({...base,testId:'kapitel-1-13-v8m3q6'}),'OK');assert.equal(gas.saveTestSummary({...base,testId:'kapitel-1-7-n4q8x2'}),'OK');assert.equal(gas.saveTestSummary(base),'OK');assert.equal(gas.saveTestSummary({...base,testId:'annat-prov'}),'Okänt testId.');assert.equal(gas.saveTestSummary({...base,testId:'toString'}),'Okänt testId.');assert.deepEqual(rows.map(r=>r.sheet),['new','old','old']);assert(rows.every(r=>r.r.length===4));
 console.log('PASS: 1000 slumpningar; exakt 5 rätt per A–D; stabilt facit; namn; obesvarat; 20/20 och 10/20; felgenomgång med kod; högst 3 råd; localStorage; MD Blob; kopiering; exakt JSON; gamla/nya/okända test-ID:n.');
})();
})().catch(e=>{console.error(e);process.exitCode=1});
