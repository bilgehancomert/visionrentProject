export const userData = {
    isUserLogin: true,
    user:{
        id: 1,
        firstName: "Ali",
        lastName: "Gel",
        roles: ["Administrator"]
    }
}

export const vehiclesData = {
    content: [
      {
        id: 1,
        model: "Audi Q8",
        doors: 4,
        seats: 5,
        luggage: 300,
        transmission: "Automatic",
        airConditioning: true,
        age: 1,
        pricePerHour: 25.0,
        fuelType: "Diesel",
        builtIn: true,
        image: ["4e1e497b-13d1-4d4f-b765-3d66763aba9e"],
      },
      {
        id: 2,
        model: "BMW i3",
        doors: 4,
        seats: 5,
        luggage: 420,
        transmission: "Automatic",
        airConditioning: true,
        age: 1,
        pricePerHour: 25.0,
        fuelType: "Hybrid",
        builtIn: true,
        image: ["16022a7e-840f-447f-ab09-fcec24a74686"],
      },
    ],
    pageable: {
      sort: { sorted: true, unsorted: false, empty: false },
      pageNumber: 0,
      pageSize: 8,
      offset: 0,
      paged: true,
      unpaged: false,
    },
    last: false,
    totalPages: 2,
    totalElements: 14,
    sort: { sorted: true, unsorted: false, empty: false },
    first: true,
    number: 0,
    numberOfElements: 8,
    size: 8,
    empty: false,
  };
  