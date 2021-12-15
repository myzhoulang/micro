const fs = require('fs-extra')
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
// var exec = require('child_process').exec;

console.log(args)

const destDir = 'C:Users\\Lang.Zhou1\\Downloads\\nginx-1.20.2\\html'

function moveDist(src, desc){
  return fs.move(src, desc, {
    overwrite: true
  }).then((error) => {
    if(!error){
      fs.remove(src)
    }
  })
}

const tasks = Object.values(args).map(value => {
  console.log(value)
  if(typeof value === 'string'){
    console.log(value)
    return  moveDist(__dirname+`/${value}/${value === 'master' ? 'build' : 'dist'}`,  destDir+`\\${value}`)
  }
})

Promise.all(tasks).then((error) => {
  // var cmd = 'nginx -s reload';
  // exec(cmd, function(error, stdout, stderr) {
  //   // 获取命令执行的输出
  // });
  console.log('ok')
}, (error) => {
  console.error(error)
})


