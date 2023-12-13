const $pizzaList = document.querySelector('#pizza-list');
const $attributeList = document.querySelector('#attribute-list');


const getQuestList = () => {
  fetch('/api/quests')
    .then(response => response.json())
    .then(questListArr => {
      questListArr.forEach(printQuest);
    })
    .catch(err => console.log(err))
}

const printQuest = ({ _id, questName, createdBy, createdAt }) => {
  const pizzaCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${questName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p> Comments</p>
      
          <ul>
             
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/quest?id=${_id}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $pizzaList.innerHTML += pizzaCard;
};

const getAttributeList = () => {
  fetch('/api/attributes')
    .then(response => response.json())
    .then(attributeListArr => {
      attributeListArr.forEach(printAttribute);
    })
    .catch(err => console.log(err))
}

const printAttribute = ({ _id, attributeName }) => {
  const pizzaCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${attributeName}</h3>
        <div class="card-body flex-column col-auto">
  
        </div>
      </div>
    </div>
  `;

  $attributeList.innerHTML += pizzaCard;
};

getQuestList()
getAttributeList()