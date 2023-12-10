const $pizzaList = document.querySelector('#pizza-list');

const getQuestList = () => {
  fetch('/api/quests')
    .then(response => response.json())
    .then(questListArr => {
      questListArr.forEach(printPizza);
    })
    .catch(err => console.log(err))
}

const printPizza = ({ _id, questName, createdBy, createdAt }) => {
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

getQuestList()