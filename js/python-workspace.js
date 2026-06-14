(() => {
  const workspaces = document.querySelectorAll("[data-python-workspace]");

  if (!workspaces.length) {
    return;
  }

  let pyodideReadyPromise;

  function getPyodide() {
    if (!pyodideReadyPromise) {
      pyodideReadyPromise = loadPyodide();
    }

    return pyodideReadyPromise;
  }

  function splitInputLines(value) {
    return value
      .split(/\r?\n/)
      .map((line) => line.trimEnd())
      .filter((line) => line.length > 0);
  }

  async function runPython(workspace) {
    const code = workspace.querySelector("[data-python-code]");
    const input = workspace.querySelector("[data-python-input]");
    const output = workspace.querySelector("[data-python-output]");
    const runButton = workspace.querySelector("[data-python-run]");

    if (!code || !input || !output || !runButton) {
      return;
    }

    runButton.disabled = true;
    output.textContent = "Startar Python...";

    try {
      const pyodide = await getPyodide();
      const userInputs = splitInputLines(input.value);

      pyodide.globals.set("user_code", code.value);
      pyodide.globals.set("user_inputs_json", JSON.stringify(userInputs));

      const result = pyodide.runPython(`
import builtins
import contextlib
import io
import json
import sys
import traceback

_inputs = json.loads(user_inputs_json)
_output = io.StringIO()
_old_input = builtins.input
_line_count = 0
_max_lines = 5000

def _stop_long_programs(frame, event, arg):
    global _line_count
    if event == "line":
        _line_count += 1
        if _line_count > _max_lines:
            raise RuntimeError("Programmet stoppades eftersom det körde för många steg. Kontrollera loopens villkor.")
    return _stop_long_programs

def _workspace_input(prompt=""):
    print(prompt, end="")
    if _inputs:
        value = _inputs.pop(0)
        print(value)
        return value
    raise EOFError("Ingen mer inmatning. Lägg till fler rader under Inmatning.")

builtins.input = _workspace_input

try:
    sys.settrace(_stop_long_programs)
    with contextlib.redirect_stdout(_output), contextlib.redirect_stderr(_output):
        exec(user_code, {"__name__": "__main__"})
except Exception:
    traceback.print_exc(file=_output)
finally:
    sys.settrace(None)
    builtins.input = _old_input

_output.getvalue()
`);

      output.textContent = result || "Programmet kördes utan utskrift.";
    } catch (error) {
      output.textContent = String(error);
    } finally {
      runButton.disabled = false;
    }
  }

  workspaces.forEach((workspace) => {
    const runButton = workspace.querySelector("[data-python-run]");

    if (runButton) {
      runButton.addEventListener("click", () => runPython(workspace));
    }
  });
})();
