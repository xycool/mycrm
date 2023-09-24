import { assertDefined } from "./base"

const state = {
  stages: [
    'New Candidates',
    'Waiting for Reply',
    'Screening (recruiter)',
    'Test Task',
    'Interview (manager)',
    'Offer presentation',
    'Offer accepted',
    'Offer declined',
    'Candidate failed',
  ]
}
const root = document.getElementById("crm") as HTMLElement
assertDefined(root, `root muse be defined`)
// I use w-fit to make the div scrollable horizontally.
root.className = 'flex w-fit whitespace-nowrap bg-slate-200 overflow-x-scroll'

for (const stage of state.stages) {

  const _div = document.createElement('div')
  _div.className = 'h-screen mr-3 w-48'
  {
    const __divTitle = document.createElement('div')
    __divTitle.className = 'bg-white px-4 py-2 mb-2 rounded-sm'
    __divTitle.innerText = stage

    const __divBody = document.createElement('div')
    __divBody.className = 'h-full bg-slate-50 rounded-sm'

    _div.appendChild(__divTitle)
    _div.appendChild(__divBody)
  }

  root.appendChild(_div)
}