import React, { useState } from 'react';

function App() {
  const [nowString, setNowString] = useState('');
  const [tsString, setTsString] = useState('');
  // value 表示要转的形式 1表示rap转ts入参; 2表示rap转ts响应参数；
  const onClick = (value) => {
    // console.log("nowString:", nowString);
    let temp = formattingTs(nowString, value);
    setTsString(temp);
    // console.log("tsString:", temp, value);
  }

  const onChange2 = () => {

  }

  //自动写入当前输入框的值
  const onChange = (e) => {
    setNowString(e.target.value)
  }

  // 对传入的对象字符串进行格式化处理
  const formattingTs = (e, value) => {
    let temp = {};
    temp = e;
    try {
      temp = JSON.parse(e);
    }
    catch (err) {
      alert("json格式错误");
      temp = {}
      return
    }
    temp = JSON.parse(e);
    console.log("temp", typeof temp, temp);
    let temp1 = `// ${temp?.itf?.name ?? 'NameParams'} 入参\nexport interface ${temp?.itf?.url.split('/').pop() ?? 'Name'}Params {\n`;  // 入参
    let temp2 = `// ${temp?.itf?.name ?? 'NameItem'} 响应参数\nexport interface ${temp?.itf?.url.split('/').pop() ?? 'Name'}Item {\n`; // 响应参数
    temp.properties.map((item) => {
      if (item['scope'] === "request") {
        if (item['type'] === 'String')
          temp1 += `  ${item['name']}?: string;// ${item['description']}\n`;
        else if (item['type'] === 'Number')
          temp1 += `  ${item['name']}?: number;// ${item['description']}\n`;
        else if (item['type'] === 'Boolean')
          temp1 += `  ${item['name']}?: boolean;// ${item['description']}\n`;
        // 当为引用类型（Object,Array这种）时目前是给的any -待改进
        else {
          temp1 += `  ${item['name']}?: any;// ${item['description']}\n`;
        }
      }
      if (item['scope'] === "response") {
        if (item['type'] === 'String')
          temp2 += `  ${item['name']}?: string;// ${item['description']}\n`;
        else if (item['type'] === 'Number')
          temp2 += `  ${item['name']}?: number;// ${item['description']}\n`;
        else if (item['type'] === 'Boolean')
          temp2 += `  ${item['name']}?: boolean;// ${item['description']}\n`;
        // 当为引用类型（Object,Array这种）时目前是给的any -待改进
        else {
          temp2 += `  ${item['name']}?: any;// ${item['description']}\n`;
        }
      }
      return 0
    })
    temp1 += '}\n';
    temp2 += '}\n';
    // console.log(temp1)
    // console.log(temp2)
    return value === 1 ? temp1 : temp2;
  }


  return (
    <>
      <h2>简易的rap参数转ts格式工具</h2>
      <div>
        <textarea rows="30" cols="50" value={nowString} name='value1' onChange={onChange}></textarea>
        <textarea rows="30" cols="50" value={tsString} name='value2' onChange={onChange2}></textarea>
        <button type="" onClick={() => { onClick(1) }}>点击转换入参</button>
        <button type="" onClick={() => { onClick(2) }}>点击转换返回参数</button>
      </div>
    </>
  );
}

export default App;
