function calculate (type, value) {
    if (type == 'action') {

        if (value == 'C') {
            document.getElementById('result').value = '';
        }

        if (value == '+' || value == '-' || value == '/' || value == '*' || value == '.') {
            document.getElementById('result').value += value;
        }

        if (value == '=') {
            let field_value = eval(document.getElementById('result').value)
            document.getElementById('result').value = field_value
        }
        
    } else if (type == "value"){
        document.getElementById('result').value += value;
    }
}
