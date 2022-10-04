const regex=[[/^0+/,""],
  [/\+0+/,"+"],
  [/\*0+/,"*0"],
  [/-0+/,"-"],
  [/\/0+/,"/"],
  [/\+\./,"+0."],
  [/\*\./,"*0."],
  [/-\./,"-0."],
  [/\/\./,"/0."],
  [/\.(?=\..*)/,""],
  [/\D+\+/,"+"],
  [/\D+\*/,"*"],
  [/\D+\//,"/"]
  ]

function cleanOutput(arr){
  for (let i in regex){
    if (regex[i][0].test(arr)){
      arr=arr.replace(regex[i][0],regex[i][1]);
    }
  }
  if (arr==""){
    arr="0"
  }
  return arr;
};

export default cleanOutput;