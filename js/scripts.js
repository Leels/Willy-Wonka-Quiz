$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var candy = $("select#candy").val();
    var familyMember = $("select#familyMember").val();
    var color = $("select#color").val();

    var result = '';
    if (candy === 'chocolate' && familyMember === 'grandpa' && color === 'violet'){
      result = 'Charlie Bucket';

    }

    if (candy === 'chocolate' && familyMember === 'grandpa' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'chocolate' && familyMember === 'grandpa' && color === 'rainbow'){
      result = 'Willy Wonka';

    }
    if (candy === 'gobstopers' && familyMember === 'grandpa' && color === 'violet'){
      result = 'Charlie Bucket';

    }

    if (candy === 'gobstopers' && familyMember === 'grandpa' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'gobstopers' && familyMember === 'grandpa' && color === 'rainbow'){
      result = 'Augustus Gloop';

    }
    if (candy === 'gum' && familyMember === 'grandpa' && color === 'violet'){
      result = 'Violet Beauregarde';

    }

    if (candy === 'gum' && familyMember === 'grandpa' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'gum' && familyMember === 'grandpa' && color === 'rainbow'){
      result = 'Violet Beauregarde';

    }
    if (candy === 'chocolate' && familyMember === 'mom' && color === 'violet'){
      result = 'Charlie Bucket';

    }
    if (candy === 'chocolate' && familyMember === 'mom' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'chocolate' && familyMember === 'mom' && color === 'rainbow'){
      result = 'Willy Wonka';

    }
    if (candy === 'gobstopers' && familyMember === 'mom' && color === 'violet'){
      result = 'Charlie Bucket';

    }

    if (candy === 'gobstopers' && familyMember === 'mom' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'gobstopers' && familyMember === 'mom' && color === 'rainbow'){
      result = 'Augustus Gloop';

    }
    if (candy === 'gum' && familyMember === 'mom' && color === 'violet'){
      result = 'Violet Beauregarde';

    }

    if (candy === 'gum' && familyMember === 'mom' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'gum' && familyMember === 'mom' && color === 'rainbow'){
      result = 'Violet Beauregarde';

    }

    if (candy === 'chocolate' && familyMember === 'dad' && color === 'violet'){
      result = 'Charlie Bucket';

    }
    if (candy === 'chocolate' && familyMember === 'dad' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'chocolate' && familyMember === 'dad' && color === 'rainbow'){
      result = 'Willy Wonka';

    }
    if (candy === 'gobstopers' && familyMember === 'dad' && color === 'violet'){
      result = 'Charlie Bucket';

    }

    if (candy === 'gobstopers' && familyMember === 'dad' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'gobstopers' && familyMember === 'dad' && color === 'rainbow'){
      result = 'Augustus Gloop';

    }
    if (candy === 'gum' && familyMember === 'dad' && color === 'violet'){
      result = 'Violet Beauregarde';

    }

    if (candy === 'gum' && familyMember === 'dad' && color === 'orange'){
      result = 'Oompa-Loompa';

    }

    if (candy === 'gum' && familyMember === 'dad' && color === 'rainbow'){
      result = 'Violet Beauregarde';

    }

    $("#character").text(result);
    $("#result").show();
  });
});
