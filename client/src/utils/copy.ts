import { notify } from "./notification";

export function copyToClipboard(url: string) {
  navigator.clipboard.writeText(url).then(() => {
    notify('Успешно скопировано')
  }).catch(() => notify('Ошибка при копировании, попробуйте еще раз'));
}