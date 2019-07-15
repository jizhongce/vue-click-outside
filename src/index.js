import Vue from 'vue';


let handleOutsideClick

let ClickOutside = {

	bind: function (el, binding, vnode) {

		const CloseHandler  = binding.value.closehandler

		const ExcludeRef  = binding.value.excluderef

		let ClickedExculdeRef = false

		handleOutsideClick = (e) =>{	
			
			GetElsLoop:
			for(let Ref of ExcludeRef){

				var ExcludeEl = document.getElementsByClassName(Ref)

				for(let element of ExcludeEl){

					ClickedExculdeRef = element.contains(e.target)

					if (ClickedExculdeRef) {
						break GetElsLoop;
					}
					
				}
			}			

			if (!el.contains(e.target) && !ClickedExculdeRef) {
				vnode.context[CloseHandler]()
			  }
			
		}
		document.addEventListener('click', handleOutsideClick)
	},
	
	unbind: function(){
		document.removeEventListener('click', handleOutsideClick)
	}
  }

Vue.directive('click-outside', ClickOutside)

export default ClickOutside