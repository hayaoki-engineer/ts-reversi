import fs from 'fs';
import util from 'util';

const promisifyReadFile = util.promisify(fs.readFile);

async function main() {
  console.log("1. 開始");

  console.log("2. ファイル読み込み前");
  const data = await promisifyReadFile('../package.json');
  console.log("3. ファイル読み込み後：", data);
  const fileContent = data.toString();
  console.log('4. 完了:',fileContent)
}

main()