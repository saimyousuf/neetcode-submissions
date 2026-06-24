class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0;i<9;i+=3){
            for(let j=0;j<9;j+=3){
                if(checkBlock(i,j,board) == false){
                    return false;
                }
            }
        }

        for(let i=0;i<9;i++){
            if(checkRow(i,board)==false){
                return false;
            }
        }

        for(let j=0;j<9;j++){
            if(checkCol(j,board)==false){return false;}
        }

        return true;
    }
   
}

function checkRow(row,board){
    let set = new Set();
    for(let j=0;j<9;j++){
        if(board[row][j]!="."){
            if(set.has(board[row][j])){return false;}
            set.add(board[row][j]);
        }
    }
    return true;
}


function checkCol(col,board){
    let set = new Set();
    for(let i=0;i<9;i++){
        if(board[i][col]!="."){
            if(set.has(board[i][col])){return false;}
            set.add(board[i][col]);
        }
    }
    return true;
}

function  checkBlock(m,n,board){
        let set = new Set();
        for(let i=m;i<m+3;i++){
            for(let j=n;j<n+3;j++){
                if(board[i][j]!="." && set.has(board[i][j])){
                    return false;
                }
                set.add(board[i][j]);
            }
        }
        return true;
    }
