let mokal = document.querySelector('#mokal'), wisker = document.querySelector('#wiskerblooms')
document.querySelector('#submit').onclick = function() {
    let milk_mult = 1,milk_progress = 1 ,cat_mult = 1

    milk_progress=document.querySelector('#achievements').value/25

    if (document.querySelector('#santamilk').checked) {
        milk_mult*=1.05
    }
    const bm = document.querySelector('#breathmilk'), rb = document.querySelector('#realitybend')
    if (bm.checked||rb.checked) {
        if (bm.checked && !rb.checked) {
        milk_mult*=1.05
        } else if (rb.checked && !bm.checked) {
        milk_mult*=1.005
        } else {
            milk_mult*=1.055
        }
    }
    if (mokal.checked) {
        const diamond_slot = document.querySelector('#first_slot')
        const ruby_slot = document.querySelector('#second_slot')
        const jade_slot = document.querySelector('#third_slot')
        if (diamond_slot.checked) {
            milk_mult*=1.1
        } else if (ruby_slot.checked) {
            milk_mult*=1.05
        } else if (jade_slot.checked) {
            milk_mult*=1.03
        }
    }

    if (document.querySelector('#wiskerblooms').checked) {
        milk_mult*=1+document.querySelector('#garden_buff').value/100
    }

    if (document.querySelector('#Kitten_helpers').checked) {
        cat_mult*=(1+milk_progress*0.1*milk_mult)
    }
    if (document.querySelector('#Kitten_workers').checked) {
        cat_mult*=(1+milk_progress*0.125*milk_mult)
    }
    if (document.querySelector('#Kitten_engineers').checked) {
        cat_mult*=(1+milk_progress*0.15*milk_mult)
    }
    if (document.querySelector('#Kitten_overseers').checked) {
        cat_mult*=(1+milk_progress*0.175*milk_mult)
    }
    if (document.querySelector('#Kitten_managers').checked) {
        cat_mult*=(1+milk_progress*0.2*milk_mult)
    }
    if (document.querySelector('#Kitten_accountants').checked) {
        cat_mult*=(1+milk_progress*0.2*milk_mult)
    }
    if (document.querySelector('#Kitten_specialists').checked) {
        cat_mult*=(1+milk_progress*0.2*milk_mult)
    }
    if (document.querySelector('#Kitten_experts').checked) {
        cat_mult*=(1+milk_progress*0.2*milk_mult)
    }
    if (document.querySelector('#Kitten_consultants').checked) {
        cat_mult*=(1+milk_progress*0.2*milk_mult)
    }
    if (document.querySelector('#Kitten_assistants').checked) {
        cat_mult*=(1+milk_progress*0.175*milk_mult)
    }
    if (document.querySelector('#Kitten_marketeers').checked) {
        cat_mult*=(1+milk_progress*0.15*milk_mult)
    }
    if (document.querySelector('#Kitten_analystss').checked) {
        cat_mult*=(1+milk_progress*0.125*milk_mult)
    }
    if (document.querySelector('#Kitten_executives').checked) {
        cat_mult*=(1+milk_progress*0.115*milk_mult)
    }
    if (document.querySelector('#Kitten_angels').checked) {
        cat_mult*=(1+milk_progress*0.1*milk_mult)
    }
    if (document.querySelector('#Kitten_fortune').checked) {
        cat_mult*=(1+milk_progress*0.05*milk_mult)
    }

    document.querySelector('#kitten_bonus').innerHTML= `x${(Math.round(cat_mult*1000)/1000).toLocaleString('ru')} or +${(Math.round((cat_mult-1)*100000)/1000).toLocaleString('ru')}%`
}
mokal.onclick = function() {
    if (mokal.checked) {
    document.querySelector('#slots').classList.remove('hidden')
    } else {
        document.querySelector('#slots').classList.add('hidden')
        
    }
}
wisker.onclick = function() {
    if (wisker.checked) {
    document.querySelector('#garden').classList.remove('hidden')
    } else {
        document.querySelector('#garden').classList.add('hidden')
        
    }
}