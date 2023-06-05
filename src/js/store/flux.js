import { objectOf } from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []

			//cada objeto representaria entonces un contacto
			//Your data structures, A.K.A Entities
		},
		actions: {
			// funcion de agregar un nuevo contacto
			addNew: (fullName, email, phone, address) => {
				console.log(fullName, email, phone, address);
				//getStore().contacts.concat({ fullName, email, phone, address });
				//setStore({ contacts: getStore().contacts.concat({ fullName, email, phone, address }) });
				let_datos = {
					full_name: fullName,
					email: email,
					agenda_slug: "shiki",
					address: address,
					phone: phone
				};

				// esta seria la url a donde se haria el POST(con su metodo,tipo de dato y cuerpo)
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					//caracteristicas de la peticion que voy a mandar(metodo,body,)
					method: "POST",
					headers: { "Content-type": "application/json; charset=UTF-8" },
					body: JSON.stringify(_datos) //_datos es la variable con todos los valores que declaramos arriba(linea14)
				}) //estas serian las promesas
					.then(response => response.json()) //trae un arespuesta y la convierte a json
					.then(data => console.log(data)) /// esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
					.catch(err => console.log(err)); //// si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.
			},


			searchContact: () => {
				//setStore({propiedadDeStore:valor})
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/sofia18")
					.then(response => response.json()) // te trae un respuestas y la convierte en json
					.then(data => setStore({ contacts: data })) // esa respuesta la voy a guardar en un espacio de memoria que se llame "data" que a su vez se convertira en un objeto.
					.catch(err => console.log("request failed", err)); // si sale algo mal en alguno de los dos primeros pasos, aqui te mostraria el error.
				},

				//DELETE CONTACTS
				onDelete: id => {
					fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
						method: "DELETE",
						headers: { "Content-type": "application/json; charset=UTF-8" }
					})
						.then(response => response.json())
						.then(data => console.log(data))
						.catch(err => console.log(err));
				},
	
				//EDIT CONTACTS
				editContact: (fullName, email, phone, adress, id) => {
					let _datos = {
						full_name: fullName,
						email: email,
						agenda_slug: "shiki",
						address: adress,
						phone: phone
					};
					fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
						method: "PUT",
						body: JSON.stringify(_datos),
						headers: { "Content-type": "application/json; charset=UTF-8" }
					}) 
						.then(response => response.json())
						.then(data => console.log(data))
						.catch(err => console.log(err));
			}
		}
	};
};
export default getState;