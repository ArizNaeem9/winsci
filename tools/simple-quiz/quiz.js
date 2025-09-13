(function(){
  const BANKS = {
    cs: [
      {type:'single', q:'An algorithm is…', options:[
        {t:'a random guess', ok:false},
        {t:'a step-by-step procedure', ok:true},
        {t:'a computer', ok:false}
      ], explain:'Algorithms are precise, ordered steps to solve a problem.'},
      {type:'multi', q:'Select inputs for a program that greets a user:', options:[
        {t:'user name', ok:true},
        {t:'CPU temperature', ok:false},
        {t:'language preference', ok:true}
      ], explain:'Inputs are data the program reads to make decisions or produce output.'}
    ],
    python: [
      {type:'single', q:'What does input() return?', options:[
        {t:'Always an integer', ok:false},
        {t:'A string', ok:true},
        {t:'A boolean', ok:false}
      ], explain:'input() returns text; convert with int()/float() as needed.'},
      {type:'single', q:'Which loop prints numbers 0..4?', options:[
        {t:'for i in range(5): print(i)', ok:true},
        {t:'for i in 5: print(i)', ok:false},
        {t:'while i < 5: print(i)', ok:false}
      ], explain:'range(5) yields 0..4.'}
    ],
    ai: [
      {type:'single', q:'A model is…', options:[
        {t:'a mapping from inputs to outputs', ok:true},
        {t:'always a human', ok:false},
        {t:'just data', ok:false}
      ], explain:'A model uses patterns from data to map inputs to outputs.'},
      {type:'multi', q:'Sources of bias can include…', options:[
        {t:'biased training data', ok:true},
        {t:'labeling mistakes', ok:true},
        {t:'the laws of physics', ok:false}
      ], explain:'Bias often appears in data and labels, or how a system is used.'}
    ]
  };

  function getParam(name){
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }

  const form = document.getElementById('quiz');
  const submitBtn = document.getElementById('submit');
  const resetBtn = document.getElementById('reset');
  const loadBtn = document.getElementById('load');
  const bankSel = document.getElementById('bank');
  const results = document.getElementById('results');

  function render(bankKey){
    const bank = BANKS[bankKey] || BANKS.cs;
    form.innerHTML = '';
    bank.forEach((item, idx) => {
      const fs = document.createElement('fieldset');
      const lg = document.createElement('legend');
      lg.textContent = `Q${idx+1}. ${item.q}`;
      fs.appendChild(lg);

      item.options.forEach((opt, j) => {
        const id = `q${idx}_o${j}`;
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = item.type === 'multi' ? 'checkbox' : 'radio';
        input.name = `q${idx}`;
        input.id = id;
        input.value = String(opt.ok);
        label.htmlFor = id;
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + opt.t));
        fs.appendChild(label);
      });
      form.appendChild(fs);
    });
    results.textContent = '';
    submitBtn.disabled = false;
    resetBtn.disabled = false;
  }

  function grade(){
    const bank = BANKS[bankSel.value] || BANKS.cs;
    let correct = 0;
    let total = bank.length;
    results.innerHTML = '';

    bank.forEach((item, idx) => {
      const chosen = Array.from(form.querySelectorAll(`[name="q${idx}"]`))
        .filter(i => i.checked)
        .map(i => (i.value === 'true'));

      const expected = item.options.map(o => !!o.ok);
      const ok = JSON.stringify(chosen) === JSON.stringify(expected.filter((_,k)=>form.querySelectorAll(`[name="q${idx}"]`)[k].checked));
      // Robust check: compare sets of indices of truths
      const truthIdxExpected = item.options.map((o,i)=>o.ok?i:null).filter(x=>x!==null);
      const truthIdxChosen = Array.from(form.querySelectorAll(`[name="q${idx}"]`))
        .map((i,ii)=>i.checked?ii:null).filter(x=>x!==null);
      const isCorrect = truthIdxExpected.length===truthIdxChosen.length && truthIdxExpected.every((v,i)=>v===truthIdxChosen[i]);

      if(isCorrect) correct++;

      const p = document.createElement('p');
      p.className = isCorrect ? 'correct' : 'incorrect';
      p.textContent = `Q${idx+1}: ` + (isCorrect ? 'Correct' : 'Try again') + ' — ' + item.explain;
      results.appendChild(p);
    });
    const summary = document.createElement('p');
    summary.innerHTML = `<strong>Score:</strong> ${correct}/${total}`;
    results.appendChild(summary);
  }

  loadBtn.addEventListener('click', ()=> render(bankSel.value));
  submitBtn.addEventListener('click', (e)=>{e.preventDefault(); grade();});
  resetBtn.addEventListener('click', (e)=>{e.preventDefault(); render(bankSel.value);});

  // initial from URL
  const urlBank = getParam('bank');
  if(urlBank && (urlBank in BANKS)) bankSel.value = urlBank;
  render(bankSel.value);
})();
