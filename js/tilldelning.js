(() => {
  'use strict';
  const el = id => document.getElementById(id);
  const pythonValue = value => typeof value === 'boolean' ? (value ? 'True' : 'False') : String(value);
  function node(tag, text, className) {
    const item = document.createElement(tag);
    if (text !== undefined) item.textContent = text;
    if (className) item.className = className;
    return item;
  }
  const assign = (name, value, explanation) => ({
    code: `${name} = ${value.code}`,
    run(memory) {
      memory[name] = value.read(memory);
      return explanation(memory);
    },
  });
  const print = (expression, explanation) => ({
    code: `print(${expression.code})`,
    run(memory, write) {
      const value = expression.read(memory);
      write(pythonValue(value));
      return explanation(memory, value);
    },
  });
  const number = value => ({code: String(value), read: () => value});
  const variable = name => ({code: name, read: memory => memory[name]});
  const initialize = initial => assign('x', number(initial), () => `Först skapas x med värdet ${initial}. Den här raden skriver inte ut något.`);
  const printX = () => print(variable('x'), (memory, value) => `print(x) skriver ut ${value}. x har fortfarande värdet ${memory.x}.`);
  const examples = [
    {id: 'assignment', title: '1. Tilldelning med =', editable: true,
      intro: 'En tilldelning ger x ett värde. Den senare tilldelningen ersätter det tidigare värdet.',
      program: initial => [initialize(initial),
        assign('x', number(5), () => 'x får värdet 5. Tilldelningen skriver inte ut något.'), printX()]},
    {id: 'comparison', title: '2. Jämförelse med ==', editable: true,
      intro: 'Jämförelsen ger True eller False. Här skriver print ut svaret, och sedan värdet på x.',
      program: initial => [initialize(initial),
        print({code: 'x == 5', read: memory => memory.x === 5}, (memory, value) => `x == 5 blir ${pythonValue(value)}. print skriver ut svaret. x är fortfarande ${memory.x}.`), printX()]},
    {id: 'increment', title: '3. Öka x med ett', editable: true,
      intro: 'Högerledet använder det gamla värdet på x. Sedan tilldelas x det beräknade värdet.',
      program: initial => [initialize(initial),
        assign('x', {code: 'x + 1', read: memory => memory.x + 1}, memory => `${memory.x - 1} + 1 beräknas först. Sedan får x värdet ${memory.x}. Ingenting skrivs ut förrän print körs.`), printX()]},
    {id: 'copy', title: '4. Följ a och b', editable: false,
      intro: 'Kör raderna i ordning. Vad händer med b när a ändras?',
      program: () => [
        assign('a', number(5), () => 'a skapas med värdet 5.'),
        assign('b', variable('a'), () => 'b får värdet som a har just nu: 5.'),
        assign('a', number(10), () => 'a får värdet 10. b är fortfarande 5. Här använder vi heltal.'),
        print(variable('a'), () => 'print(a) skriver ut 10.'),
        print(variable('b'), () => 'print(b) skriver ut 5. En senare tilldelning till a ändrar inte b.') ]},
    {id: 'direction', title: '5. Tilldelningen måste ha ett giltigt mål', editable: true, syntaxError: true,
      intro: 'Python kontrollerar hela programmets syntax innan någon rad körs.',
      program: initial => [initialize(initial), {code: '5 = x'}, printX()]},
  ];

  function createRunner(example) {
    const host = el(example.id);
    host.append(node('h2', example.title), node('p', example.intro));
    let input, error;
    if (example.editable) {
      const edit = node('div', undefined, 'sim-edit');
      const label = node('label', 'Talet i rad 1: x =');
      label.htmlFor = `${example.id}-start`;
      input = node('input');
      input.id = label.htmlFor; input.type = 'number'; input.value = '9';
      input.min = '-100'; input.max = '100'; input.step = '1';
      const help = node('p', 'Ändrar du talet ändras första kodraden. Programmet börjar då om.');
      help.id = `${example.id}-help`;
      error = node('p', '', 'sim-error'); error.id = `${example.id}-error`;
      error.setAttribute('aria-live', 'polite'); error.hidden = true;
      input.setAttribute('aria-describedby', `${help.id} ${error.id}`);
      edit.append(label, input, help, error); host.append(edit);
    }
    const workspace = node('div', undefined, 'sim-workspace');
    const editor = node('div'); editor.append(node('h3', 'Python-kod'));
    const code = node('ol', undefined, 'sim-code'); editor.append(code);
    const state = node('div', undefined, 'sim-state');
    const memoryView = node('div', undefined, 'sim-memory'); memoryView.setAttribute('aria-live', 'polite');
    const output = node('pre', '', 'sim-output'); output.setAttribute('aria-live', 'polite');
    const emptyOutput = node('p', 'Ingen utskrift ännu.', 'sim-empty');
    state.append(node('h3', 'Variabler just nu'), memoryView, node('h3', 'Utskrift från print'), emptyOutput, output);
    workspace.append(editor, state); host.append(workspace);
    const actions = node('div', undefined, 'sim-actions');
    const step = node('button', 'Kör rad 1'); step.type = 'button'; step.className = 'sim-step';
    const reset = node('button', 'Börja om', 'sim-secondary'); reset.type = 'button'; reset.hidden = true;
    actions.append(step, reset); host.append(actions);
    const status = node('p', 'Programmet har inte körts.', 'sim-status'); status.setAttribute('aria-live', 'polite');
    const feedback = node('p', '', 'sim-feedback'); feedback.setAttribute('aria-live', 'polite'); feedback.hidden = true;
    host.append(status, feedback);
    let memory, cursor, program, lines;
    function renderMemory() {
      memoryView.replaceChildren();
      if (!Object.keys(memory).length) {
        memoryView.append(node('p', 'Inga variabler är definierade ännu.', 'sim-empty'));
      } else {
        Object.entries(memory).forEach(([name, value]) => {
          const box = node('div', undefined, 'sim-variable');
          box.append(node('span', name), node('strong', pythonValue(value)));
          memoryView.append(box);
        });
      }
    }
    function setup() {
      memory = {}; cursor = 0;
      output.textContent = ''; emptyOutput.hidden = false;
      feedback.hidden = true; feedback.classList.remove('error');
      reset.hidden = true; step.hidden = false;
      step.textContent = example.syntaxError ? 'Prova att köra programmet' : 'Kör rad 1';
      status.textContent = 'Programmet har inte körts.';
      const initial = input ? input.valueAsNumber : 0;
      const valid = !input || (Number.isInteger(initial) && initial >= -100 && initial <= 100);
      step.disabled = !valid; workspace.hidden = !valid;
      if (error) {
        error.hidden = valid;
        error.textContent = valid ? '' : 'Ange ett heltal mellan −100 och 100.';
      }
      code.replaceChildren();
      if (!valid) {status.textContent = 'Ange ett giltigt tal på första raden.'; return;}
      program = example.program(initial);
      lines = program.map(statement => {
        const li = node('li'); li.append(node('code', statement.code)); return li;
      });
      code.append(...lines); renderMemory();
    }
    step.addEventListener('click', () => {
      if (step.disabled || cursor >= program.length) return;
      feedback.hidden = false; reset.hidden = false;
      if (example.syntaxError) {
        lines[1].classList.add('active');
        status.textContent = 'SyntaxError på rad 2. Ingen rad har körts.';
        feedback.classList.add('error');
        feedback.textContent = '5 kan inte vara mål för en tilldelning. Hela programmet stoppas före körningen, så inte ens x på rad 1 skapas. Skriv x = 5 för att tilldela ett värde.';
        step.hidden = true; reset.focus(); return;
      }
      lines.forEach((line, i) => line.classList.toggle('active', i === cursor));
      const statement = program[cursor++];
      feedback.textContent = statement.run(memory, text => {output.textContent += `${text}\n`; emptyOutput.hidden = true;});
      renderMemory();
      status.textContent = `Rad ${cursor} har körts.${cursor === program.length ? ' Programmet är klart.' : ''}`;
      if (cursor === program.length) {step.hidden = true; reset.focus();}
      else step.textContent = `Kör rad ${cursor + 1}`;
    });
    if (input) input.addEventListener('input', setup);
    reset.addEventListener('click', () => {setup(); step.focus();});
    setup();
  }
  examples.forEach(createRunner);
  const questions = [
    {q:'x = 4 körs först. Vilket värde har x efter x == 5?', options:['4', '5', 'False'], correct:0, explanation:'x är 4. Jämförelsen ger False, men ändrar inte x.'},
    {q:'x = 4 körs först. Vad händer när x = x + 1 körs?', options:['x blir 5', 'Det är en omöjlig ekvation', 'Resultatet är False'], correct:0, explanation:'Python läser gamla x, beräknar 4 + 1 och tilldelar sedan x värdet 5. Det är en instruktion, inte en ekvation.'},
    {q:'a = 5, sedan b = a, sedan a = 10. Vad är b?', options:['10', '5', 'Inte definierad'], correct:1, explanation:'b är 5. b fick värdet som a hade när b = a kördes. Senare tilldelning till a ändrar inte b.'},
    {q:'Vilken rad kan användas för att fråga om x är lika med 5?', options:['x = 5', '5 = x', '5 == x'], correct:2, explanation:'5 == x jämför värden och ger True eller False. x = 5 tilldelar, och 5 = x är ogiltig syntax.'},
    {q:'Vad skriver programmet ut?', code:'x = 9\nx = 5\nprint(x)', options:['9', '5', 'True'], correct:1, explanation:'Den andra raden tilldelar x värdet 5. print(x) skriver därför ut 5.'},
    {q:'Vad skriver jämförelsen ut?', code:'x = 9\nprint(x == 5)', options:['9', '5', 'False'], correct:2, explanation:'9 är inte lika med 5, så jämförelsen ger False. print skriver ut svaret. x är fortfarande 9.'},
    {q:'Vad skriver jämförelsen ut nu?', code:'x = 5\nprint(x == 5)', options:['True', '5', 'False'], correct:0, explanation:'x har värdet 5, så x == 5 ger True. print skriver ut True, inte värdet på x.'},
    {q:'Vilket värde skriver sista raden ut?', code:'x = 9\nx == 5\nprint(x)', options:['5', 'False', '9'], correct:2, explanation:'x == 5 jämför värdena utan att ändra x. I detta skript skrivs jämförelsens svar inte ut, eftersom den raden saknar print. Sista raden skriver ut 9.'},
    {q:'Vad skriver det här programmet ut?', code:'x = 5', options:['Ingenting', '5', 'True'], correct:0, explanation:'Tilldelningen ger x värdet 5, men skriver inte ut något. För att visa värdet behöver programmet också print(x).'},
    {q:'Vilka två rader skrivs ut, i vilken ordning?', code:'x = 2\nprint(x)\nx = 7\nprint(x)', options:['7\n7', '2\n7', '2\n2'], correct:1, explanation:'Första print körs när x är 2. Sedan får x värdet 7 och nästa print skriver ut 7. Den första utskriften ändras inte i efterhand.'},
    {q:'Vad skrivs ut efter två ökningar?', code:'x = 1\nx = x + 1\nx = x + 1\nprint(x)', options:['2', 'False', '3'], correct:2, explanation:'Första ökningen använder värdet 1 och ger x värdet 2. Nästa ökning använder det nya värdet 2 och ger x värdet 3.'},
    {q:'Vad skriver de två print-raderna ut?', code:'x = 5\nlika = x == 5\nprint(lika)\nprint(x)', options:['True\n5', '5\n5', 'True\nTrue'], correct:0, explanation:'x == 5 ger True. Tilldelningen sparar det svaret i lika. x behåller värdet 5. Därför skrivs först True och sedan 5 ut.'},
    {q:'Är a och b lika efter den sista tilldelningen?', code:'a = 5\nb = a\na = 10\nprint(a == b)', options:['True', 'False', '10'], correct:1, explanation:'b fick värdet 5 när b = a kördes. Sedan ändrades bara a till 10. Jämförelsen 10 == 5 ger därför False.'},
    {q:'Vad skriver programmet ut när b tilldelas igen?', code:'a = 5\nb = a\na = 10\nb = a\nprint(b)', options:['10', '5', 'True'], correct:0, explanation:'Den andra tilldelningen b = a körs när a har värdet 10. Då får även b värdet 10. b ändras eftersom en ny tilldelning körs.'},
    {q:'Fungerar jämförelsen med talet till vänster?', code:'x = 5\nprint(5 == x)', options:['SyntaxError', '5', 'True'], correct:2, explanation:'Ja. 5 == x och x == 5 jämför samma värden och ger True här. Däremot är 5 = x en ogiltig tilldelning.'},
    {q:'Vad skriver den sista jämförelsen ut?', code:'x = 1\nx = x + 1\nprint(x == x + 1)', options:['True', 'False', '3'], correct:1, explanation:'Tilldelningen gör x till 2. Jämförelsen frågar sedan om 2 är lika med 3, vilket ger False. Jämförelsen ändrar inte x.'},
  ];
  questions.forEach((question, index) => {
    const section = document.createElement('section'); section.className = 'quiz-question';
    const heading = document.createElement('h3'); heading.textContent = `${index + 1}. ${question.q}`;
    const options = document.createElement('div'); options.className = 'quiz-options';
    const feedback = document.createElement('p'); feedback.setAttribute('aria-live', 'polite');
    question.options.forEach((text, choice) => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = text; button.setAttribute('aria-pressed', 'false');
      button.addEventListener('click', () => {
        [...options.children].forEach(other => other.setAttribute('aria-pressed', String(other === button)));
        feedback.textContent = `${choice === question.correct ? 'Rätt!' : 'Prova att spåra värdena rad för rad.'} ${question.explanation}`;
      });
      options.append(button);
    });
    section.append(heading);
    if (question.code) {
      const code = node('pre', undefined, 'quiz-code');
      code.append(node('code', question.code));
      section.append(code);
    }
    section.append(options, feedback); el('quiz').append(section);
  });
})();
