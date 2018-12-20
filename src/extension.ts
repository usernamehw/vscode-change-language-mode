'use strict';
import { languages, window, commands, ExtensionContext } from 'vscode';
export function activate(ctx: ExtensionContext) {
	const disposable = commands.registerCommand('changeLanguageMode.change', ({ languageId }) => {
		const activeEditor = window.activeTextEditor;
		if (!activeEditor) {
			return;
		}
		if (typeof languageId !== 'string') {
			return;
		}
		if (typeof languages.setTextDocumentLanguage === 'undefined') {
			return;
		}
		languages.setTextDocumentLanguage(activeEditor.document, languageId);
	});
	ctx.subscriptions.push(disposable);
}

export function deactivate() { }
