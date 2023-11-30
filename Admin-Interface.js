//factory function to create doctor
function makeDoctor(name, phone, city, adresse, spectialty) {
    return {
        name,
        phone,
        city,
        adresse,
        spectialty
    }
}

//factory function to create doctor list
function Doctors() {
    var instances = {}
    instances.list = []
    instances.sortList = []
    instances.add = add

    return instances
}

//methode for the factory function doctors to add one doctor to the doctor list array
var add = function (name, phone, city, adresse, spectialty) {
    var doctor = makeDoctor(name, phone, city, adresse, spectialty)
    this.list.push(doctor)
}

//our main doctor list
var doctorList = Doctors()
doctorList.add('Dr Helmi BEN SALEM', '+216 73 217 257', 'Sousse', 'Maghareb Médical Centre Complexe Selma 4 rue lLeopold Senghor 2ème etage', 'Cardiologists')
doctorList.add('Dr Kamel MILI', '+216 73 229 540', 'Sousse', '56 ave Mohamed Karoui, Imm Jawhara (en face maternité)', 'Cardiologists')
doctorList.add('Dr Manel BOUABID', '+216 71 947 548', 'Tunis', 'Résidence Ines. Boulevard de la Terre. Zone urbaine nord', 'Dentist')
doctorList.add('Dr Kais LAABIDI', '+216 71 798 382', 'Tunis', '23 Avenue des Etats Unis Amérique', 'Dentist')
doctorList.add('Dr Achraf HADIJI', '+216 71 798 382', 'Sfax', 'B 31 Syphax medical, Route de Gremda km 2', 'Surgeon Oncologist')
doctorList.add('Dr Sofiene MILADI', '+216 70 689 409', 'Ariana', '15 Avenue Mustpha Moshen 2eme Etage App B 2-2', 'Radiologue')

function addDoctor() {
    var newName = $('#name').val()
    var newPhone = $('#phone').val()
    var newCity = $('#city').val()
    var newAdress = $('#adress').val()
    var newSpectiality = $('#speciality').val()

    var newDoctor = makeDoctor(newName, newPhone, newCity, newAdress, newSpectiality)
    doctorList.list.push(newDoctor)
    display()
}
//display function to display our doctor list

function display() {
    $('#list-of-doctors').empty()
    $('#list-of-doctors').append(`
    <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>City</th>
    <th>Adress</th>
    <th>Spectialty</th>  
    </tr>
    `)
    for (let i = 0; i < doctorList.list.length; i++) {
        $('#list-of-doctros').append(`
                <tr>
                    <td>${doctorList.list[i].name}</td>
                    <td>${doctorList.list[i].phone}</td>
                    <td>${doctorList.list[i].city}</td>
                    <td>${doctorList.list[i].adresse}</td>
                    <td>${doctorList.list[i].spectialty}</td>
                    <td><input id='doctor-${i}' type='checkbox'></td>
                </tr>
        `)
    }
}

// this function provide the admin to add a doctor to our doctor list


// this functionality make the add form show when we click on the New Doctor button only
$('#new-doctor').click(function () {
    $('#add-form').show()
})

//this functionality make the add form hide when we click on the button Add Doctor
$('#add-doctor').click(function () {
    $('#add-form').toggle()
})

//this 
$('#add-form').hide()

display()
console.log(doctorList.list)

