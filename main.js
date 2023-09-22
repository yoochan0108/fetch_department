/*
  promise 객체
  객체에 담겨있는 데이터의 상태값을 가지고 있는
  panding : 대기
  fullfiled : 성공적으로 작업의 수행이 완료된 상태
  rejected : 객체의 요청이 거절된 상태

  작업시간이 오래걸리는 업무를 수행할때 프로미스로 반환하면
  해당 작업완료이후 동기적으로 다음 작업을 선형화해서 수행 (es5)
*/
const section = document.querySelector('section');
fetch('DB/department.json')
	.then((data) => data.json())
	.then((json) => {
		console.log(json.members);
		let tags = '';
		json.members.map((data) => {
			tags += `
        <article>
          <div class='pic'>
            <img src='img/${data.pic}' >
          </div>
            <h2>${data.name}</h2>
            <p>${data.position}</p>
        </article>
      `;
		});

		section.innerHTML = tags;
	})

	.catch((err) => {
		console.log(err);
	});
