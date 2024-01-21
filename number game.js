
import random
def display_board(board):
    print(" " + board[0] + " | " + board[1] + " | " + board[2])
    print("---|---|---")
    print(" " + board[3] + " | " + board[4] + " | " + board[5])
    print("---|---|---")
    print(" " + board[6] + " | " + board[7] + " | " + board[8])

def player_move(board):
    while True:
        move = int(input("Enter your move (1-9): ")) - 1
        if 0 <= move <= 8 and board[move] == ' ':
            board[move] = 'X'
            break
        else:
            print("Invalid move. Try again.")

def is_winner(board, player):
    winning_combinations = [(0, 1, 2), (3, 4, 5), (6, 7, 8),
                            (0, 3, 6), (1, 4, 7), (2, 5, 8),
                            (0, 4, 8), (2, 4, 6)]

    for combo in winning_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] == player:
            return True
    return False

def is_board_full(board):
    return ' ' not in board

def game_over(board):
    return is_winner(board, 'X') or is_winner(board, 'O') or is_board_full(board)

def minimax(board, depth, is_maximizing):
    if is_winner(board, 'X'):
        return -1
    elif is_winner(board, 'O'):
        return 1
    elif is_board_full(board):
        return 0

    if is_maximizing:
        max_eval = float('-inf')
        for i in range(9):
            if board[i] == ' ':
                board[i] = 'O'
                eval = minimax(board, depth + 1, False)
                board[i] = ' '
                max_eval = max(max_eval, eval)
        return max_eval
    else:
        min_eval = float('inf')
        for i in range(9):
            if board[i] == ' ':
                board[i] = 'X'
                eval = minimax(board, depth + 1, True)
                board[i] = ' '
                min_eval = min(min_eval, eval)
        return min_eval

def ai_move(board):
    best_score = float('-inf')
    best_move = -1

    for i in range(9):
        if board[i] == ' ':
            board[i] = 'O'
            score = minimax(board, 0, False)
            board[i] = ' '

            if score > best_score:
                best_score = score
                best_move = i

    board[best_move] = 'O'

def switch_player():
    global current_player
    if current_player == 'player':
        current_player = 'AI'
    else:
        current_player = 'player'

board = [' '] * 9
current_player = 'player'

while not game_over(board):
    display_board(board)

    if current_player == 'player':
        player_move(board)
    else:
        ai_move(board)

    switch_player()

display_board(board)

if is_winner(board, 'X'):
    print("Congratulations! You win!")
elif is_winner(board, 'O'):
    print("Sorry, you lose. The AI wins.")
else:
    print("It's a draw!")