import{_ as x,t as b,e as s,i as e,q as d,F as c,j as p,g as r,o,n as u,bS as m,u as h,s as f,x as g,y as w,k as v}from"./index-0bc2e7ab.js";const _={data(){return{customer:{name:"",email:"",phone:""},formData:{name:"بيانات العطلة",datafeild:[{label:"اسم العطلة بالانجليزية",type:"text",model:"",placeholder:"مثال: احمد محمد فريد غنيم"},{label:"اسم العطلة بالعربية",type:"text",model:"",placeholder:"مثال: احمد محمد فريد غنيم"},{label:"التاريخ",type:"date",model:"",placeholder:"حدد تاريخ العطلة"},{label:"النوع",type:"select",model:"",options:[{value:"يوم كامل",label:"مثال: يوم كامل"},{value:"نصف يوم",label:"نصف يوم"}],placeholder:"مثال: يوم كامل"},{label:"الحالة",type:"select",model:"",options:[{value:"نشط",label:"مثال: نشط"},{value:"غير نشط",label:"غير نشط"}],placeholder:"مثال: نشط"}]},building:!0,units:!1,tabledata:b}},components:{},methods:{addCustomer(){console.log(this.customer)},navigateTo(a){this.$router.push({name:a})}}},C=a=>(g("data-v-9b1a08a3"),a=a(),w(),a),y={class:"w-full"},k={class:"bg-white mb-[50px] h-[100px] w-[100%] flex justify-center"},V={class:"flex w-[96%]"},H={class:"w-[60%] flex justify-start items-center gap-3"},j={class:"flex flex-row gap-2"},D=r('<button data-v-9b1a08a3><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9b1a08a3><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" data-v-9b1a08a3></rect><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E1E6EF" data-v-9b1a08a3></rect><path d="M16.0013 21.3334C15.6346 21.3334 15.3209 21.203 15.06 20.9421C14.7986 20.6807 14.668 20.3667 14.668 20.0001C14.668 19.6334 14.7986 19.3194 15.06 19.0581C15.3209 18.7972 15.6346 18.6667 16.0013 18.6667C16.368 18.6667 16.682 18.7972 16.9433 19.0581C17.2042 19.3194 17.3346 19.6334 17.3346 20.0001C17.3346 20.3667 17.2042 20.6807 16.9433 20.9421C16.682 21.203 16.368 21.3334 16.0013 21.3334ZM16.0013 17.3334C15.6346 17.3334 15.3209 17.2027 15.06 16.9414C14.7986 16.6805 14.668 16.3667 14.668 16.0001C14.668 15.6334 14.7986 15.3194 15.06 15.0581C15.3209 14.7972 15.6346 14.6667 16.0013 14.6667C16.368 14.6667 16.682 14.7972 16.9433 15.0581C17.2042 15.3194 17.3346 15.6334 17.3346 16.0001C17.3346 16.3667 17.2042 16.6805 16.9433 16.9414C16.682 17.2027 16.368 17.3334 16.0013 17.3334ZM16.0013 13.3334C15.6346 13.3334 15.3209 13.2027 15.06 12.9414C14.7986 12.6805 14.668 12.3667 14.668 12.0001C14.668 11.6334 14.7986 11.3196 15.06 11.0587C15.3209 10.7974 15.6346 10.6667 16.0013 10.6667C16.368 10.6667 16.682 10.7974 16.9433 11.0587C17.2042 11.3196 17.3346 11.6334 17.3346 12.0001C17.3346 12.3667 17.2042 12.6805 16.9433 12.9414C16.682 13.2027 16.368 13.3334 16.0013 13.3334Z" fill="#1D2433" data-v-9b1a08a3></path></svg></button><button data-v-9b1a08a3><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9b1a08a3><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" data-v-9b1a08a3></rect><rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#E1E6EF" data-v-9b1a08a3></rect><path d="M10.6667 20.6667C10.4778 20.6667 10.3196 20.6027 10.192 20.4747C10.064 20.3471 10 20.1889 10 20C10 19.8111 10.064 19.6529 10.192 19.5253C10.3196 19.3973 10.4778 19.3333 10.6667 19.3333H13.3333C13.5222 19.3333 13.6807 19.3973 13.8087 19.5253C13.9362 19.6529 14 19.8111 14 20C14 20.1889 13.9362 20.3471 13.8087 20.4747C13.6807 20.6027 13.5222 20.6667 13.3333 20.6667H10.6667ZM10.6667 12.6667C10.4778 12.6667 10.3196 12.6029 10.192 12.4753C10.064 12.3473 10 12.1889 10 12C10 11.8111 10.064 11.6527 10.192 11.5247C10.3196 11.3971 10.4778 11.3333 10.6667 11.3333H16C16.1889 11.3333 16.3473 11.3971 16.4753 11.5247C16.6029 11.6527 16.6667 11.8111 16.6667 12C16.6667 12.1889 16.6029 12.3473 16.4753 12.4753C16.3473 12.6029 16.1889 12.6667 16 12.6667H10.6667ZM16 22C15.8111 22 15.6529 21.936 15.5253 21.808C15.3973 21.6804 15.3333 21.5222 15.3333 21.3333V18.6667C15.3333 18.4778 15.3973 18.3193 15.5253 18.1913C15.6529 18.0638 15.8111 18 16 18C16.1889 18 16.3473 18.0638 16.4753 18.1913C16.6029 18.3193 16.6667 18.4778 16.6667 18.6667V19.3333H21.3333C21.5222 19.3333 21.6804 19.3973 21.808 19.5253C21.936 19.6529 22 19.8111 22 20C22 20.1889 21.936 20.3471 21.808 20.4747C21.6804 20.6027 21.5222 20.6667 21.3333 20.6667H16.6667V21.3333C16.6667 21.5222 16.6029 21.6804 16.4753 21.808C16.3473 21.936 16.1889 22 16 22ZM13.3333 18C13.1444 18 12.986 17.936 12.858 17.808C12.7304 17.6804 12.6667 17.5222 12.6667 17.3333V16.6667H10.6667C10.4778 16.6667 10.3196 16.6027 10.192 16.4747C10.064 16.3471 10 16.1889 10 16C10 15.8111 10.064 15.6527 10.192 15.5247C10.3196 15.3971 10.4778 15.3333 10.6667 15.3333H12.6667V14.6667C12.6667 14.4778 12.7304 14.3193 12.858 14.1913C12.986 14.0638 13.1444 14 13.3333 14C13.5222 14 13.6807 14.0638 13.8087 14.1913C13.9362 14.3193 14 14.4778 14 14.6667V17.3333C14 17.5222 13.9362 17.6804 13.8087 17.808C13.6807 17.936 13.5222 18 13.3333 18ZM16 16.6667C15.8111 16.6667 15.6529 16.6027 15.5253 16.4747C15.3973 16.3471 15.3333 16.1889 15.3333 16C15.3333 15.8111 15.3973 15.6527 15.5253 15.5247C15.6529 15.3971 15.8111 15.3333 16 15.3333H21.3333C21.5222 15.3333 21.6804 15.3971 21.808 15.5247C21.936 15.6527 22 15.8111 22 16C22 16.1889 21.936 16.3471 21.808 16.4747C21.6804 16.6027 21.5222 16.6667 21.3333 16.6667H16ZM18.6667 14C18.4778 14 18.3196 13.936 18.192 13.808C18.064 13.6804 18 13.5222 18 13.3333V10.6667C18 10.4778 18.064 10.3193 18.192 10.1913C18.3196 10.0638 18.4778 10 18.6667 10C18.8556 10 19.0138 10.0638 19.1413 10.1913C19.2693 10.3193 19.3333 10.4778 19.3333 10.6667V11.3333H21.3333C21.5222 11.3333 21.6804 11.3971 21.808 11.5247C21.936 11.6527 22 11.8111 22 12C22 12.1889 21.936 12.3473 21.808 12.4753C21.6804 12.6029 21.5222 12.6667 21.3333 12.6667H19.3333V13.3333C19.3333 13.5222 19.2693 13.6804 19.1413 13.808C19.0138 13.936 18.8556 14 18.6667 14Z" fill="#1D2433" data-v-9b1a08a3></path></svg></button>',2),E=r('<div dir="rtl" class="w-[60%] flex justify-start" data-v-9b1a08a3><form class="w-full" data-v-9b1a08a3><div class="relative" data-v-9b1a08a3><div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-v-9b1a08a3><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-v-9b1a08a3><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-v-9b1a08a3></path></svg></div><input type="search" id="default-search" class="block w-full pt-0 pb-0 h-[32px] pr-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="بحث" required data-v-9b1a08a3></div></form></div>',1),M=C(()=>e("div",{class:"w-[40%] flex flex-col h-[100px] justify-evenly text-right md:text-[12px] xl:text-[16px]"},[e("div",{class:"flex gap-2 justify-end"},[e("span",null,"المستوى الثالث"),e("span",null,"<"),e("span",{class:"text-[#2F6FED]"},"المستوى الثاني"),e("span",null,"<"),e("span",{class:"text-[#2F6FED]"},"المستوى الأول")]),e("div",null,[e("h1",null,"العطلات")])],-1)),F={class:"mb-11 w-[97%] mx-auto"},Z={class:"flex justify-end h-[32px] py-10 bg-[#ECF1F2] border-b items-center rounded-ss-xl rounded-se-xl"},S={class:"pr-5",style:{"font-family":"'Montserrat-Arabic'","font-size":"18px","font-weight":"500","line-height":"18px","text-align":"right"}},B=C(()=>e("img",{src:v,alt:"",class:"mr-10"},null,-1)),A={class:"w-full flex justify-end items-end rounded-xl py-12 lg:px-4 flex-col gap-12 bg-white"},I={class:"w-[90%]"},U={class:"form-section w-full flex lg:flex-nowrap flex-wrap items-center justify-between flex-row-reverse gap-5"},N=["for"],$=["id","type","onUpdate:modelValue","placeholder"],q=["id","onUpdate:modelValue"],z={value:"",disabled:""},L=["value"],T=r('<div class="mb-11 w-[97%] mx-auto" data-v-9b1a08a3><div class="flex justify-end h-[32px] py-10 bg-[#ECF1F2] border-b items-center rounded-ss-xl rounded-se-xl" data-v-9b1a08a3><div class="pr-5" style="font-family:&#39;Montserrat-Arabic&#39;;font-size:18px;font-weight:500;line-height:18px;text-align:right;" data-v-9b1a08a3><h1 data-v-9b1a08a3>تفاصيل العطلة</h1></div><img src="'+v+'" alt="" class="mr-10" data-v-9b1a08a3></div><div class="w-full flex justify-end items-end rounded-xl py-12 lg:px-4 flex-col gap-12 bg-white" data-v-9b1a08a3><div class="w-[90%]" data-v-9b1a08a3><div class="form-section w-full flex lg:flex-nowrap flex-wrap items-center justify-between flex-row-reverse gap-5" data-v-9b1a08a3><textarea name="" id="" class="w-full rounded-lg" placeholder="اكتب تفاصيل العطلة....." dir="rtl" data-v-9b1a08a3></textarea></div></div></div></div>',1);function G(a,i,J,K,n,O){return o(),s("div",null,[e("div",y,[e("div",k,[e("div",V,[e("div",H,[e("div",j,[D,e("button",{onClick:i[0]||(i[0]=(...t)=>a.sendData&&a.sendData(...t)),class:"bg-[#3C757D] h-[32px] text-white rounded-[8px] px-4 text-nowrap"}," حفظ العطلة الجديدة ")]),E]),M])])]),e("div",F,[e("div",Z,[e("div",S,[e("h1",null,d(n.formData.name),1)]),B]),e("div",A,[e("div",I,[e("div",U,[(o(!0),s(c,null,p(n.formData.datafeild,t=>(o(),s("div",{key:t.id,class:"input-wrapper w-full md:w-[40%]"},[e("label",{for:t.model,class:"label"},d(t.label),9,N),t.type!="select"?u((o(),s("input",{key:0,id:t.model,type:t.type,class:"input-field","onUpdate:modelValue":l=>t.model=l,placeholder:t.placeholder},null,8,$)),[[m,t.model]]):h("",!0),t.type==="select"?u((o(),s("select",{key:1,id:t.model,class:"select-field w-full","onUpdate:modelValue":l=>t.model=l},[e("option",z,d(t.placeholder),1),(o(!0),s(c,null,p(t.options,l=>(o(),s("option",{value:l.value,key:l.value},d(l.label),9,L))),128))],8,q)),[[f,t.model]]):h("",!0)]))),128))])])])]),T])}const Q=x(_,[["render",G],["__scopeId","data-v-9b1a08a3"]]);export{Q as default};
