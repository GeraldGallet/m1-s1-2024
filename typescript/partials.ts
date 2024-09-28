type WithFirstName = {
  firstName: string;
}

type WithLastName = {
  lastName: string;
}

type WithFullName = {
  fullName: string;
}

type WithAge = {
  age: number;
}

// type Human = (WithFirstName & WithLastName & WithAge) | (WithFullName & WithAge);
type Human2 = ((WithFirstName & WithLastName) | WithFullName) & WithAge;


