function each(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i],i) 
    }
}

function filter(array, predicate) {
    var acc = []
    each(array, function (element, index) {
      if (predicate(element, index)) {
        acc.push(element)
      }
    })
    return acc
  }

function makeDoctor(name, phone, city, adresse, spectialty) {
    return {
    name,
    phone,
    city,
    adresse,
    spectialty
    }
}

function Doctors(){
    var instances = {}
    instances.list = []
    instances.add = add
    instances.dispaly = dispaly
    return instances
}

var add = function(name, phone, city, adresse, spectialty){
    var doctor = makeSomething(name, phone, city, adresse, spectialty)
    this.list.push(doctor)
  }

var doctorList = Doctors()
doctorList.add('Dr Helmi BEN SALEM', '+216 73 217 257', 'sousse', 'Maghareb Médical Centre Complexe Selma 4 rue lLeopold Senghor 2ème etage','Cardiologist')
doctorList.add('Dr Kamel MILI', '+216 73 229 540','sousse' , '56 ave Mohamed Karoui, Imm Jawhara (en face maternité)', 'Cardiologist')
doctorList.add('Dr Manel BOUABID', '+216 71 947 548', 'Résidence Ines. Boulevard de la Terre. Zone urbaine nord', 'Dentist')
doctorList.add('Dr Kais LAABIDI', '+216 71 798 382', '23 Avenue des Etats Unis d’Amérique', 'Dentist')
doctorList.add('Dr Achraf HADIJI', '+216 71 798 382', 'B 31 Syphax medical, Route de Gremda km 2', 'Surgeon Oncologist')
doctorList.add('Dr Achraf HADIJI', '+216 71 798 382', 'B 31 Syphax medical, Route de Gremda km 2', 'Surgeon Oncologist')

var dispaly = function(){
    var array = filter(this.list, function(ele, i){
        var valueDoctor = $('#selectDoctor').val()
        var valuePosition = $('#selectPosition').val()
        return ((valueDoctor === ele.spectialty) && (valuePosition === ele.city))
    })
    return array
}

function displayDoctors(array){
    
}