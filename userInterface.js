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
    instances.sortList = []
    instances.add = add
    instances.display = display
    return instances
}

var add = function(name, phone, city, adresse, spectialty){
    var doctor = makeDoctor(name, phone, city, adresse, spectialty)
    this.list.push(doctor)
  }

  var display = function(special, position){
    this.sortList = filter(this.list, function(ele, i){
        return ((special == ele.spectialty) && (position == ele.city))
    })
}

var doctorList = Doctors()
doctorList.add('Dr Helmi BEN SALEM', '+216 73 217 257', 'Sousse', 'Maghareb Médical Centre Complexe Selma 4 rue lLeopold Senghor 2ème etage','Cardiologists')
doctorList.add('Dr Kamel MILI', '+216 73 229 540','Sousse' , '56 ave Mohamed Karoui, Imm Jawhara (en face maternité)', 'Cardiologists')
doctorList.add('Dr Manel BOUABID', '+216 71 947 548','Tunis', 'Résidence Ines. Boulevard de la Terre. Zone urbaine nord', 'Dentist')
doctorList.add('Dr Kais LAABIDI', '+216 71 798 382','Tunis', '23 Avenue des Etats Unis Amérique', 'Dentist')
doctorList.add('Dr Achraf HADIJI', '+216 71 798 382','Sfax', 'B 31 Syphax medical, Route de Gremda km 2', 'Surgeon Oncologist')
doctorList.add('Dr Sofiene MILADI', '+216 70 689 409','Ariana', '15 Avenue Mustpha Moshen 2eme Etage App B 2-2', 'Radiologue')


function displayDoctors(array){
    var valueSpeciality = $('#selectSpeciality').val()
    var valuePosition = $('#selectPosition').val()
    $('.displayDoctors').empty()
    if(array.length === 0){
        $('.displayDoctors').append(`<h2 id='notFound'>${valueSpeciality} in ${valuePosition} "not found"</h2>`)
    }
    each(array, function(ele , i){
        $('.numberFound').text(`-- ${i+1} Doctors found in ${valuePosition} --`)
        $('.displayDoctors').append(`
        <div id='oneDoctor'>
        <ul>
        <li id='name'>${ele.name}</li>
        <li id='speciality'>${ele.spectialty}</li>
        <li id='city'>${ele.city}</li>
        <li id='adresse'>${ele.adresse}</li>
        <li id='phone '>${ele.phone}</li>
        </ul>
        </div>`)
    })
}

  $('#search').on('click', function(){
    var valueSpeciality = $('#selectSpeciality').val()
    var valuePosition = $('#selectPosition').val()
    doctorList.display(valueSpeciality, valuePosition)
    console.log(doctorList.sortList)
    displayDoctors(doctorList.sortList)
})

$('#user').on('click', function(){
  window.location.assign('SignUP.html')
})

