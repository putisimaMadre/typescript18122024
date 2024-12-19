interface Character{
    name: string,
    age: number,
    address: Address;
    showAddress: () =>string
}

interface Address{
    calle: string;
    ciudad: string;
    pais: string
}