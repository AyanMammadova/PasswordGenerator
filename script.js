        let bar=document.getElementById("bar")
        let numberofsymbols=document.getElementById("numberofsymbols")
        let uppercase=document.getElementById("uppercase")
        let lowercase=document.getElementById("lowercase")
        let number=document.getElementById("number")
        let symbol=document.getElementById("symbol")
        let result=document.getElementById("result")
        let rec1=document.getElementById("rec1")
        let rec2=document.getElementById("rec2")
        let rec3=document.getElementById("rec3")
        let rec4=document.getElementById("rec4")
        let shuffle=''

        let uppercases="QWERTYUIOPLKJHGFDSAZXCVBNM"
        let symbols='~!@#$%^&*()_{}[]:;"<>?`/\|'
        let lowercases='qwertyuioplkjhgfdsazxcvbnm'
        let numbers='123456789'

        bar.oninput=()=>{
            numberofsymbols.innerHTML=bar.value
        }

        function generate(){
            let kod=''
            rec1.style.color="#E0E0E0"
            rec2.style.color="#E0E0E0"
            rec3.style.color="#E0E0E0"
            rec4.style.color="#E0E0E0"
            let checkednumber=0
            let length=0
            shuffle=''
            if(lowercase.checked) {
                shuffle+=lowercases
                checkednumber+=1}
            if(uppercase.checked) {
                shuffle+=uppercases
                checkednumber+=1}
            if(number.checked) {
                shuffle+=numbers
                checkednumber+=1}
            if(symbol.checked) {
                shuffle+=symbols
                checkednumber+=1}
            length=bar.value
            if(bar.value==0){
                alert("Şifrənizin uzunluğunu seçin")
                return
            }

            if(checkednumber==0){
                alert("Şərtlərdən ən azı birini seçməlisiniz")
                return
                }

            else if (checkednumber<=1){
                rec1.style.color="red"
            }
            else if (checkednumber<=2){
                rec1.style.color="red"
                rec2.style.color="#AD250D"
            }
            else  if (checkednumber<=3){
                rec1.style.color="red"
                rec2.style.color="#AD250D"
                rec3.style.color="yellow"
            }
            else if (checkednumber<=4){
                rec1.style.color="red"
                rec2.style.color="#AD250D"
                rec3.style.color="yellow"
                rec4.style.color="green"
            }
            
            for (let i = 0; i < length; i++) {
                kod+=shuffle[random(0,shuffle.length-1)]
            }
            shuffle=kod
            result.value=shuffle
        }
            
        function copy() {
            var copyText = document.getElementById("result")         
            copyText.select()
            copyText.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(copyText.value)
          }


        function random(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
