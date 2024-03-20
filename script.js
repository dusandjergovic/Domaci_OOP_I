class Vozilo {
    constructor(boja, vrsta) {

        if(vrsta !== 'automobil' && vrsta !== 'letelica' && vrsta !== 'plovilo') {
            throw new Error('Niste uneli dobru vrstu vozila')
        } else if (boja === '') {
            throw new Error('Niste uneli dobru boju vozila');
        }
        this.boja = boja;
        this.vrsta = vrsta;
    }

    userVozilo() {
           console.log(`Boja vaseg vozila je ${this.boja}, a vrsta vozila je ${this.vrsta}`); 
    }
}

class Automobil {
    constructor(marka, model, brojVrata, gorivo) {
        
        if (brojVrata !== 3 && brojVrata !== 5) {
            throw new Error('Niste uneli dobar broj vrata automobila')
            
        } else if (gorivo != 'benzin' && gorivo != 'dizel' && gorivo != 'metan') {
            throw new Error('Niste uneli dobru vrstu goriva')
        } else if (marka === 'undefined' && model === 'undefined') {
            throw new Error ('Niste uneli sve osobine automobila')
        } else if (marka !== 'BMW' && marka !== 'Audi' && marka !== 'Mercedes') {
            throw new Error ('Niste uneli dobru marku automobila')
        } else if ((marka !== 'BMW' && (model === 'M3' || model === 'M5' || model === 'X1')) || (marka !== 'Audi' && (model === 'A4' || model === 'A6')) || (marka !== 'Mercedes' && (model === 'S-Class' || model === 'SLS AMG' || model === 'G-Class'))) {
            throw new Error ('Niste uneli dobar model automobila')
        }

        this.marka = marka;
        this.model = model
        this.brojVrata = brojVrata;
        this.gorivo = gorivo;
    }

    userAutomobil() {
        console.log(`Izabrana marka automobila je ${this.marka}, model ${this.model}. Ovaj automobil ima ${this.brojVrata} vrata i ide na ${this.gorivo}`);
    }
}

let izabranoVozilo = new Vozilo('plava', 'letelica');
izabranoVozilo.userVozilo();
let izabraniAutomobil = new Automobil('BMW', 'X1', 3, 'dizel');
izabraniAutomobil.userAutomobil();
