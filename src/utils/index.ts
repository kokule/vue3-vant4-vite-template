import pkg from '../../package.json'

export const utils = {
  setPageTitle(routerTitle?: string): void {
    window.document.title = routerTitle || pkg.name || '系统手机端'
  }
}
