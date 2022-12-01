const solvebhaskara = event => {
    let [a, b, c] = identify_numbers()
    firstStep(a, b, c)
    let [d, e, f, g] = secondStep(a, b, c)
    let [h, i, j] = thirdStep(d, e, f, g)

    if (i >= 0) {
        fourthStep(h, i, j)
    } else {

        let fourthStep = `<div class="step bill-container">
        <h2>No tiene solucion</h2>
        </div>`

        const step = document.querySelector('[fourthStep]');
        step.innerHTML = fourthStep
    }



}
const identify_numbers = () => {
    let a = document.getElementById("value_a").value;
    let b = document.getElementById("value_b").value;
    let c = document.getElementById("value_c").value;

    return [a, b, c]
}
const firstStep = (a, b, c) => {
    let firstStep = `<div class="step">
        <h2 class="stepTitle">Paso <span>1</span></h2>
        <div class="bill-container">
            <span>x = <span class="border-bottom">-(<span data-value-b>${b}</span>) ± √<span class="border-top"> <span data-value-b>${b}</span>² -4 . <span data-value-a>${a}</span> . <span data-value-c>${c}</span></sapn></span></span><br>
            <span>2 . <span data-value-a>${a}</span></span>
        </div>
    </div>
    `
    const step = document.querySelector('[firstStep]');
    step.innerHTML = firstStep
}
const secondStep = (a, b, c) => {
    let d = -b
    let e = b ** 2
    let f = -4 * (a * c)
    let g = 2 * a

    const valueF = document.querySelector('[data-value-f]');
    if (f >= 0) {
        f_2 = "+ " + f
    } else {
        f_2 = f
    }

    let secondStep = `<div class="step">
        <h2 class="stepTitle">Paso <span>2</span></h2>
        <div class="bill-container">
            <span>x = <span class="border-bottom"><span data-value-d>${d}</span> ± √<span class="border-top"> <span class="border-top"> <span data-value-e>${e}</span> <span data-value-f>${f_2}</span></span></span></span><br>
            <span><span data-value-g>${g}</span></span>
        </div>
    </div>
    `

    const step = document.querySelector('[secondStep]');
    step.innerHTML = secondStep

    return [d, e, f, g]
}

const thirdStep = (d, e, f, g) => {
    let h = d;
    let i = e + f;
    let j = g;

    let thirdStep = `<div class="step">
        <h2 class="stepTitle">Paso <span>3</span></h2>
        <div class="bill-container">
            <span>x = <span class="border-bottom"><span data-value-h>${h}</span> ± √<span class="border-top"> <span data-value-i>${i}</span></span></span><br>
            <span><span data-value-j>${j}</span></span>
        </div>
    </div>
    `

    const step = document.querySelector('[thirdStep]');
    step.innerHTML = thirdStep


    return [h, i, j]
}
const fourthStep = (h, i, j) => {
    let k = h;
    let n = h;
    let l = Math.sqrt(i);
    let ñ = Math.sqrt(i);
    let m = j;
    let o = j;
    let p = (k + l) / m;
    let q = (n - ñ) / o;

    let fourthStep = `<div class="step">
        <h2 class="stepTitle">Paso <span>4</span></h2>
        <div class="bill-container">
            <span>x = <span class="border-bottom"><span data-value-k>${k}</span> + <span data-value-l>${l}</span></span><br>
            <span><span data-value-m>${m}</span></span>
        </div>
        <div class="bill-container">
            <span>x = <span class="border-bottom"><span data-value-n>${n}</span> - <span data-value-ñ>${ñ}</span></span><br>
            <span><span data-value-o>${o}</span></span> <br><br>
            
            <h2 class="solucion">Sol {${p}, ${q}}</h2>
        </div>
        
    </div>`
    const step = document.querySelector('[fourthStep]');
    step.innerHTML = fourthStep


}