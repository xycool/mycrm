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
const root = document.getElementById("crm")
assertDefined(root, `root muse be defined`)
// I use w-fit to make the div scrollable horizontally.
root.className = 'flex justify-center items-center w-fit h-screen whitespace-nowrap bg-slate-200 overflow-x-scroll'

for (const stage of state.stages) {

  const _div = document.createElement('div')
  _div.className = 'flex flex-col justify-stretch h-5/6 mr-3 w-48 group'
  {
    const __divTitle = document.createElement('div')
    __divTitle.className = 'bg-white px-4 py-2 mb-2 rounded-sm'
    __divTitle.innerText = stage

    const __divBody = document.createElement('div')
    __divBody.className = 'flex flex-col justify-end h-full bg-slate-50 rounded-sm'
    {
      const ___divAddButton = document.createElement('div')
      ___divAddButton.className = 'flex h-9 items-center border-t border-slate-100 drop-shadow-sm hidden group-hover:flex cursor-pointer hover:bg-white'
      {
        const ___divText = document.createElement('div')
        ___divText.className = 'ml-3 drop-shadow-none text-sky-600'
        ___divText.innerText = '+ Candidate'

        ___divAddButton.appendChild(___divText)
      }

      // Candidate button click listener.
      ___divAddButton.addEventListener('click', function addButtonClickListener() {
        // define modal
        const divModalShadow = document.createElement('div')
        divModalShadow.className = 'fixed top-0 bottom-0 left-0 right-0 bg-black opacity-70'

        const classModalContainer = 'flex flex-col justify-between items-stretch absolute top-0 h-screen bg-white'
        // modal's container

        const divModalContainer = document.createElement('div')
        divModalContainer.className = `${classModalContainer} left-1/2 w-1/2`
        {
          const classBlock = 'px-7'
          const classBlockTopOrBottom = `${classBlock} py-3 bg-slate-50 border-slate-100`

          // header
          const _divHeader = document.createElement('div')
          _divHeader.className = `${classBlockTopOrBottom} border-b text-2xl`
          _divHeader.innerText = 'Create Candidate'

          // content
          const _divContent = document.createElement('div')
          _divContent.className = `${classBlock} px-3`
          {
            const __divField = document.createElement('div')
            __divField.className = 'flex justify-end items-center gap-x-6'
            {
              const __label = document.createElement('label')
              __label.innerText = 'Stage'

              const __select = document.createElement('select')
              __select.className = 'border border-slate-300 w-4/5 p-2 rounded-sm border-l-4 border-l-red-400'
              {
                for (const stageOption of state.stages) {
                  const ___option = document.createElement('option')
                  ___option.value = stageOption
                  ___option.innerText = stageOption

                  if (stageOption == stage) {
                    ___option.selected = true
                  }
                  __select.appendChild(___option)
                }
              }
              __divField.appendChild(__label)
              __divField.appendChild(__select)
            }
            _divContent.appendChild(__divField)
          }
          // controls
          const _divControls = document.createElement('div')
          _divControls.className = `${classBlockTopOrBottom} flex justify-between items-center border-t`
          {
            // button customize
            const __buttonCustomizeFields = document.createElement('button')
            __buttonCustomizeFields.className = 'font-light underline hover:text-sky-600'
            __buttonCustomizeFields.innerText = 'Customize Fields'
            __buttonCustomizeFields.addEventListener('click', function buttonCustomizeFieldsClickListener() {
              // modal width wider
              divModalContainer.className = `${classModalContainer} left-1/2 w-1/2`
            })

            const __divRight = document.createElement('div')
            __divRight.className = 'flex gap-x-2'
            {
              // button Cancel
              const __buttonCancel = document.createElement('button')
              __buttonCancel.className = 'border border-slate-300 px-5 py-2 rounded-3xl bg-white hover:bg-slate-50'
              __buttonCancel.innerText = 'Cancel'
              __buttonCancel.addEventListener('click', function buttonCancelClickListener() {
                divModalShadow.remove()
                divModalContainer.remove()
              })

              // button Save
              const __buttonSave = document.createElement('button')
              __buttonSave.className = 'border border-slate-300 px-5 py-2 rounded-3xl bg-emerald-600 hover:bg-emerald-700 text-white'
              __buttonSave.innerText = 'Save'

              __divRight.appendChild(__buttonCancel)
              __divRight.appendChild(__buttonSave)
            }

            _divControls.appendChild(__buttonCustomizeFields)
            _divControls.appendChild(__divRight)
          }

          divModalContainer.appendChild(_divHeader)
          divModalContainer.appendChild(_divContent)
          divModalContainer.appendChild(_divControls)
        }
        document.body.appendChild(divModalShadow)
        document.body.appendChild(divModalContainer)
      })
      __divBody.appendChild(___divAddButton)
    }

    _div.appendChild(__divTitle)
    _div.appendChild(__divBody)
  }

  root.appendChild(_div)
}
