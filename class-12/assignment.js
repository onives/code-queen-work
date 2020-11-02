const students = [
    {
      id: 1,
      name: "Mark Alonso",
      age: 18,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 60,
        },
        {
          id: 2,
          name: "English",
          score: 85,
        },
      ],
    },
    {
      id: 2,
      name: "Paul Ryan",
      age: 19,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 78,
        },
        {
          id: 2,
          name: "English",
          score: 75,
        },
      ],
    },
    {
      id: 3,
      name: "Jackie Anite",
      age: 21,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 90,
        },
        {
          id: 2,
          name: "English",
          score: 80,
        },
      ],
    },
    {
      id: 4,
      name: "Anita Allain",
      age: 18,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 71,
        },
        {
          id: 2,
          name: "English",
          score: 45,
        },
      ],
    },
    {
      id: 5,
      name: "Kabahita Jupiter",
      age:22,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 76,
        },
        {
          id: 2,
          name: "English",
          score: 96,
        },
      ],
    },
    {
      id: 6,
      name: "Geraldine Maritus",
      age: 24,
      subjects: [
        {
          id: 1,
          name: "Math",
          score: 66,
        },
        {
          id: 2,
          name: "English",
          score: 90,
        },
      ],
    },
];


$(function(){

  for(let student of students){
    let cardDiv = $('<div>', {class: 'card'});
    $('.cards').append(cardDiv);
    
    let studentName = $(`<h3>Name : ${student.name}</h3>`);
    let studentAge = $(`<h4>Age : ${student.age}</h4>`);
    let studentId = $(`<h4>Id : ${student.id}</h4>`);

    $(cardDiv).append(studentName, studentId, studentAge);

    for (let subject of student.subjects) {
      let subjectSummary = $(`<p>${subject.name} : ${subject.score}</P>`);
      subjectSummary.addClass('results');
      $(cardDiv).append(subjectSummary);
    }
  
  };
  
});
