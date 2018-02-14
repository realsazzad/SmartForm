// Your jQuery goes here

var userData = {
	name:'',
	email:'',
	currentQuestion: '#welcome'
};


if(localStorage.getItem('userData'))
{
	userData=JSON.parse(localStorage.getItem('userData'));
	
	$('#welcome').hide();
	$(userData.currentQuestion).show();
	$('#name').val(userData.name);
	$('#email').val(userData.email);
}
else
{
	localStorage.setItem('userData',JSON.stringify(userData));
}
$('#start').click(function()
{
	
	$('#welcome').hide();
	$('#q1').show();
	userData.currentQuestion='#q1';
	localStorage.setItem('userData',JSON.stringify(userData));
});
$('#q1_next').click(function(){
	if($('#name').val() && $('#email').val())
	{
		userData.name=$('#name').val();
		userData.email=$('#email').val();
		localStorage.setItem('userData'.JSON.stringify(userData));
		$('#q1').hide();
		$('#q2').show();
	}
	
});
$('#html_q').click(function()
{
	$('#q2').hide();
	$('#q2a').show();
});
$('#css_q').click(function()
{
	$('#q2').hide();
	$('#q2b').show();
});
$('#javascript_q').click(function()
{
	$('#q2').hide();
	$('#q2c').show();
});
$('#html_previous').click(function()
{
	$('#q2a').hide();
	$('#q2').show();
});
$('#html_next').click(function()
{
	$('#q2a').hide();
	$('#q2b').show();
});
$('#css_previous').click(function()
{
	$('#q2b').hide();
	$('#q2').show();
});
$('#css_next').click(function()
{
	$('#q2b').hide();
	$('#q2c').show();
});
