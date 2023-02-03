
    const container = document.querySelector("#container");
    const resetBtn = document.querySelector(".reset");
    
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    console.log(width, height);
    
    function createGrid() {
        let p = prompt("How many grids?");
    for(let x = 0; x < p; x++){
        for(let o = 0; o < p; o++) {
        const grid = document.createElement('grid');
        grid.classList.add('grid');
        container.appendChild(grid);
        grid.addEventListener("click", function(){
            grid.style.backgroundColor = "black";
            });

        grid.style.width = width/p + "px";
        grid.style.height = height/p + "px";
        };
    };
};
            resetBtn.addEventListener("click", function(){
                while(container.firstChild){
                container.removeChild(container.firstChild);
                };
                createGrid();
            });

            createGrid();
        


























        
    







/*// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});

*/