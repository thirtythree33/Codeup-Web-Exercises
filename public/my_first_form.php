<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html>
<head>
	<title>My First HTML Form</title>
    <link rel="stylesheet" type="text/css" href="css/site.css">
</head>
<body>
	<form method="GET" action="/my_first_form.php">
        <p>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" placeholder="type username here">

        </p>
        <p>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="type password here">
        </p>
        <p>
            <button type="submit"><img src="https://www.google.com/images/srpr/logo1w.png"></button>
        </p>
	</form>
    
    <form method="GET" action="/my_first_form.php">
        <p>
            <label for="username">Username</label>
            <input id="username" name="username" type="text" placeholder="type username here">

        </p>
        <p>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" placeholder="type password here">
        </p>
        <p>
            <button type="submit"><img src="http://offtopictim.com/wp-content/uploads/2012/05/submit_button_large_red.jpg"></button>
        </p>
    </form>

    <form method="GET" action="/my_first_form.php">
        <p>When is the birthday of the USMC?</p>
        <p>
            <label>
                <input type="radio" name="q1" value="July 4, 1776">July 4, 1776
            </label>
        </p>
        <p>
            <label>
                <input type="radio" name="q1" value="November 10, 1775">November 10, 1775
            </label>
        </p>
        <p>
            <label>
                <input type="radio" name="q1" value="March 23, 1775">March 23, 1775
            </label>
        </p>
        <p>
            <label>
                <input type="radio" name="q1" value="September 11, 2001">September 11, 2001
            </label>
        </p>
        <p>
            <label>
                <input type="radio" name="q1" value="March 22, 1775">March 22, 1775
            </label>
        </p>
        <p>
            <button type="submit">Submit</button>
        </p>

    <form method="GET" action="/my_first_form.php">
        <p>Select Testing</p>
        <p>
            <label>
                <input type="radio" name="q1" value="Are you awesome?">Yes</input>
            </label>
        </p>
        <p>
            <label>
                <input type="radio" name="q1" value="Are you awesome?">No</input>
            </label>
        </p>
        <p>
            <button type="submit"><img src="http://images.sodahead.com/polls/001340853/That_Is_My_Final_Answer_answer_2_xlarge.jpeg"></button>
        </p>

    <form method="GET" action="/my_first_form.php">
        <p>
            <label for="sports">Select your favorite sport</label>
            <select id="sports" name="sports[]" multiple>
                <option value="football">Football</option>
                <option value="soccer">Soccer</option>
                <option value="basketball">Basketball</option>
                <option value="tennis">Tennis</option>
                <option value="badminton">Badminton</option>
                <option value="ping pong">Ping Pong</option>
                <option value="baseball">Baseball</option>
                <option value="hockey">Hockey</option>
                <option value="rugby">Rugby</option>
                <option value="bowling">Bowling</option>
            </select>
        </p>
    </form>
        










</body>
</html>