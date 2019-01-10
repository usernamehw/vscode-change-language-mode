'use strict';
import { languages, window, commands, ExtensionContext } from 'vscode';
export function activate(ctx: ExtensionContext) {
	const disposable = commands.registerCommand('changeLanguageMode.change', (arg) => {
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
