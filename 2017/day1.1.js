const unaltered = '4947511368953458947325823626295765395991842961953181626646951893933643725857788685121948639276527881497797486579893186459362218877315427185626432726838626275373786248436148313374416597412812896387651714525764663813145588216365953949817885886734437693435978518839556688181657231749398938416549145566813241336674464121385117244242923944541666236398724251686443362482172138263397412675468237793833433627895274615795658229668593497779379219336949123695521527727351678327625637196643154569871867135411537814996461782387626441864843811422499261947437131392625962648784586365958964873626586722243462413586672341159745286265236483119198865664978372171696739239351433868237572931487193778215173146298128869124128299244845134938856723439641512524336223411416615238144659915169616845119414715728954537116249862693423987861758469257839186868564426844898733274976989636588628563366824227975512514891266619548485722972287654456467452564996794514263588654778444674585339629818522925133588714833211619735832456987635315983954676755291814969111177698341275164413692612752442259788936174565243855184931122721697677758612566497282537549646758125345462262955359396973521412173373467385534956168327837578669281745191453572348345847882538936185494843857332836271994453696583391756444848593858845749432192679227299675719438437945657369757161747278523484412544928867943629343438686433378286374542775822769623532463578354933383722198243715175264742835417148979941278644614336278948312686593362642344368727153747272117641677391693419995738556277751148482752687391592725186733167536729952978887348443889284398593599924756374397712692329165423858767796166951294123667351125936697193357835113557738146854918767214529947143188637165424731872463515486261577751433331614228679244375262538658599699473669728956749668459932449252187669375434878754856473299952858217393593699989353319861268737267376721592658275664437945157559398136761947554744772241521399879444194633713864998414152277346737335552615438713597977965298478617489795275799857579647426674737672692483352298368182974776654531896624855489255214973658777716653657282243944278833121353223251691417844';


let split = unaltered.split('').map(Number);
let res = [];

for (let i = 0, len = split.length; i < len; ) {
  let vals = [];
  let val = split[i];
  vals.push(val);
  let j = i + 1;
  while (split[j] == val) {
    vals.push(val);
    j += 1;
  }
  
  if (vals.length > 1) {
    res.push(vals);
  }
  i = j;
}

let sum = res.reduce(function(s, a) {
  let subLen = a.length;
  s += (subLen - 1) * parseInt(a[0]);
  return s;
}, 0);



console.log(`sum: ${sum}`);

let total = 0;
for(var i = 0; i < split.length-1; i++){
  var num = Number(split[i]);
  var next = Number(split[i+1]);

  if(num == next){
    total += num;
  }
}

console.log(`total: ${total}`);