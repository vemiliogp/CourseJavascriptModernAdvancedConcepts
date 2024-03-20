import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = "5d86371f25a058e5b1c8a65e";

  console.log("Inicio del componente");

  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));

  console.log("Fin del componente");
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw `Hero with id ${id} not found`;
  
  return hero.name;
};
