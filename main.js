let mokal = document.querySelector('#mokal'), wisker = document.querySelector('#wiskerblooms'), select_all = document.querySelector('#selectall')
const kitten_mult_n=[0.1,0.125,0.15,0.175,0.2,0.2,0.2,0.2,0.2,0.175,0.15,0.125,0.115,0.1,0.05]
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

    for (let i in kitten_mult_n) {
        if (document.querySelector(`#k${+i+1}`).checked) {
            cat_mult*=(1+milk_progress*milk_mult*kitten_mult_n[i])
        }
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

select_all.onclick = function() {
    if (select_all.checked) {
        for (i in kitten_mult_n) {
            document.querySelector(`#k${+i+1}`).checked = true
        }
    } else {
        for (i in kitten_mult_n) {
            document.querySelector(`#k${+i+1}`).checked = false
        }
    }
}