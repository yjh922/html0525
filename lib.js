//n은 문자열 처리 대상이 되는 숫자
function numString(n) {
    let result = "";
    if (n < 10) {
        result = "0" + n;
    } else {
        result = n;
    }
    //console.log("함수 호출", result);
    return result;
}

//랜덤한 정수 반환받기
//호출시 max값에 1을 더해서 호출할지 함수 내부에서 +1을 해줄지 결정
//호출자는 본인이 반환받기를 원하는 수에 +1을 더해서 호출해야함
//0~9를 반환받기 원할 경우 getRandom(10)
function getRandom(max) {
    let r = Math.random();//0.0xx~0.9xxx 즉 1보다 작은수
    let n = r * max;//0.xxx*10=0부터 9사이의 실수가 반환
    return parseInt(n);
}

/*
두수의 합을 구하는 함수 정의
*/
function getResult(n1, n2) {
    let result = parseInt(n1) + parseInt(n2);
    //아래와 같은 코드를 라이브러리에 적용하면 안되는 이유?
    //이 함수를 어떠한 UI가 호출할지 예측할수가 없으므로,
    //js와 관련된 모든 페이지에서 이 함수를 재사용하기위해서는 함수는 중립적일 수록 좋다
    //따라서 반환값을 적극 활용하면 좋다
    //즉 함수를 호출한자가 무엇을 할지 예측할수 없기 떄문에
    //반환된 데이터를 가지고 무엇을 할지에 대한 결정은 호출자에게 맡기자
    return result;
}

//0~5사이의 랜덤값 구하기
//0~n 사이의 랜덤값 구하기
function getRandom1(n) {
    let result = parseInt(Math.random() * (n + 1)); //1보다 작은 난수 발생 0.0xxx~0.9xxx
    return result;
}

//최소값부터~최대값까지의 랜덤을 구하는 함수
//2와 5사이의 랜덤값을 원하면
//호출시 getRandomByRange(2,5)
function getRandomByRange(min, max) {
    let result = min + parseInt(((max - min) + 1) * Math.random());
    return result;
}