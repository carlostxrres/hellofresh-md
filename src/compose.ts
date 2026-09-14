
// import { arrayToMarkdownList } from "@/utils"

// export default function () {
//       //
//   const ingredientArray = ingredients.map(i => `${i.name}: ${i.quantity}`)
//   const ingredientList = arrayToMarkdownList(ingredientArray)

//   const utensilList = arrayToMarkdownList(utensils)
//   const utensilListIndented = "\n" + arrayToMarkdownList(utensils, 2)

//   // to do: pass instructionsHtml to markdown using a library (has to keep text formatting: paragraphs, bold...)
//   // we might want this as a table, where the first column has the index of the step, the second column has the image, and the third column has the text
//   const instructionList = `1. ¡Asegúrate de utilizar las cantidades indicadas a la izquierda para preparar tu receta! Pela y corta las **patatas** en dados de 2 cm. En una olla, agrega las **patatas**, cúbrelas con **agua** y añade una pizca de **sal**. Lleva a ebullición, luego, cocina a fuego medio 15-18 min o hasta que estén blandas.
// 2. En un bol pequeño, exprime el zumo de la **naranja**. Pela y pica finamente la **chalota.** En una sartén, calienta un chorrito de **aceite** junto con la **mantequilla** (ver cantidad en ingredientes) a fuego medio. Cuando la **mantequilla** se haya fundido, agrega la **chalota** y una pizca de **sal** y cocina 3 min, removiendo frecuentemente, hasta que quede transparente.
// 3. Cuando la **chalota** esté lista, agrega en la sartén el **zumo de naranja**, el **caldo vegetal** en polvo y la **miel. Salpimienta**, lleva a ebullición y cocina 2 min, removiendo con una espátula, hasta que la **salsa** se reduzca y espese. Prueba y rectifica de **sal** y **pimienta**. Luego, reserva en un bol.
// 4. Seca la **merluza** con ayuda de un papel de cocina y **salpimienta.** En la sartén, calienta un chorrito de **aceite** a fuego medio. Cuando el **aceite** esté caliente, cocina la **merluza** 3 min por el lado de la piel y 2 min por el otro lado, hasta que esté dorada y bien hecha en el interior. RECUERDA: Lávate las manos y los utensilios de cocina después de manipular pescado crudo.
// 5. Cuando las **patatas** estén cocidas, escurre y vuelve a poner en la olla. Con un pasapurés o tenedor, tritura hasta conseguir un **puré** homogéneo. Añade la **mantequilla para el puré** (ver cantidad en ingredientes), **salpimienta** y remueve para integrar.
// 6. En una ensaladera, mezcla el **vinagre balsámico**, un chorrito de **aceite, sal** y **pimienta**. Luego, añade la **rúcula** y remueve para aderezar. Sirve el **puré de patata** y la **ensalada de rúcula** por separado en platos. Luego, coloca la **merluza** en el plato y cubre con la **salsa de naranja y miel**.`

//   const allergenList = arrayToMarkdownList(allergens)

//   return `---
// categories:
//   - "[[Recipes]]"
// type: 
// meal: cena
// price:
// diet:
// kcal: ${nutrition.kcal || ""}
// protein_g: ${nutrition.protein_g || ""}
// carbs_g: ${nutrition.carbs_g || ""}
// fat_g: ${nutrition.fat_g || ""}
// fiber_g: ${nutrition.fiber_g || ""}
// equipment: ${utensilListIndented}
// ---

// ${description}

// - [URL](${url})
// - [PDF](${pdfUrl})
// - Tiempo total: ${metrics.time || ""}
// - Difficulty: ${metrics.difficulty || ""}

// ## Ingredientes

// ${ingredientList}

// ## Utensilios

// ${utensilList}

// ## Instrucciones

// ${instructionList}

// ## Alérgenos

// ${allergenList}`
// }