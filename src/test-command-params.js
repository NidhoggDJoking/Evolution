const vscode = require('vscode');
module.exports = function(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.demo.getCurrentFilePath', (uri) => {
        vscode.window.showInformationMessage(`当前文件(夹)路径是：${uri ? uri.path : '这个我咋知道呢'}`);
    }));
};