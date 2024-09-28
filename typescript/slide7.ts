type Student = {
  firstName: string
  lastName: string
  scores: number[]
}

function computeMean(student: Student): number {
  return student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length
}

function computeHighestGradeStudent(students: Student[]): Student {
  let highestMeanStudent = students[0]

  for (let i = 1; i < students.length; i++) {
    if (computeMean(students[i]) > computeMean(highestMeanStudent)) {
      highestMeanStudent = students[i]
    }
  }

  return highestMeanStudent
}

const students: Student[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    scores: [90, 85, 95]
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    scores: [80, 75, 85]
  }
]

console.log('##### student means #####')
console.log(computeMean(students[0]))
console.log(computeMean(students[1]))

console.log('##### highest mean student #####')
console.log(computeHighestGradeStudent(students))

type Grade = {
  score: number
  coefficient?: number
}

type StudentWithCoef = Omit<Student, 'scores'> & {
  scores: Grade[]
}

function computeMeanWithCoef(student: StudentWithCoef): number {
  return student.scores.reduce((acc, grade) => acc + grade.score * (grade.coefficient ?? 1), 0) / student.scores.reduce((acc, grade) => acc + (grade.coefficient ?? 1), 0)
}

function computeHighestGradeStudentWithCoef(students: StudentWithCoef[]): StudentWithCoef {
  let highestMeanStudent = students[0]

  for (let i = 1; i < students.length; i++) {
    if (computeMeanWithCoef(students[i]) > computeMeanWithCoef(highestMeanStudent)) {
      highestMeanStudent = students[i]
    }
  }

  return highestMeanStudent
}

const studentsWithCoef: StudentWithCoef[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    scores: [{
      score: 90,
    }, {
      score: 85,
      coefficient: 0.2
    }, {
      score: 95,
      coefficient: 0.5
    }]
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      scores: [{
        score: 80,
        coefficient: 0.3
      }, {
        score: 75,
      }, {
        score: 85,
        coefficient: 0.5
      }]
    }
]

console.log('##### student means with coefficient #####')
console.log(computeMeanWithCoef(studentsWithCoef[0]))
console.log(computeMeanWithCoef(studentsWithCoef[1]))

console.log('##### highest mean student with coefficient #####')
console.log(computeHighestGradeStudentWithCoef(studentsWithCoef))
