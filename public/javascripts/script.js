$("#signupCheckbox").click(function() {
        if ($("#signupPassword").attr("type") == "password") {
            $("#signupPassword").attr("type", "text");
        } else {
            $("#signupPassword").attr("type", "password");
        }
    });

$("#loginCheckbox").click(function() {
    if ($("#loginPassword").attr("type") == "password") {
        $("#loginPassword").attr("type", "text");
    } else {
        $("#loginPassword").attr("type", "password");
    }
});