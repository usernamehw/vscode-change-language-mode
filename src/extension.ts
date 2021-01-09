import { commands, ExtensionContext, languages, window } from 'vscode';

export function activate(ctx: ExtensionContext) {
	const disposable = commands.registerCommand('changeLanguageMode.change', arg => {
		if (typeof arg === 'undefined') {
			commands.executeCommand('workbench.action.editor.changeLanguageMode');
			return;
		}
		const activeEditor = window.activeTextEditor;
		if (!activeEditor) {
			return;
		}
		let languageId;

		if (typeof arg === 'string') {
			languageId = arg;
		} else if (typeof arg.languageId === 'string') {
			languageId = arg.languageId;
		}
		if (languageId) {
			languages.setTextDocumentLanguage(activeEditor.document, languageId);
		}
	});
	ctx.subscriptions.push(disposable);
}

export function deactivate() { }
