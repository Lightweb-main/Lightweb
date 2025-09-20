const textarea = document.getElementById("codeInput");
	runCode();
  textarea.addEventListener("keydown", (event) => {
    if (event.key === '>') {
      setTimeout(() => {
        const cursor = textarea.selectionStart;
        const value = textarea.value;

        const before = value.slice(0, cursor);
        const after = value.slice(cursor);

        const tagMatch = before.match(/<(\w+)>$/);

        if (tagMatch) {
          const tagName = tagMatch[1];
          const voidTags = ['br', 'hr', 'img', 'meta', 'input', 'link'];

          if (!voidTags.includes(tagName.toLowerCase())) {
            const closingTag = `</${tagName}>`;

            if (!after.startsWith(closingTag)) {
              textarea.value = before + closingTag + after;

              const newCursor = before.length;
              textarea.setSelectionRange(newCursor, newCursor);
            }
          }
        }
      }, 0);
    }
  });
    function runCode() {
      const userCode = document.getElementById("codeInput").value;
      const outputFrame = document.getElementById("output");
      const outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
	  
	  
      outputDoc.open();
      outputDoc.write(userCode);
      outputDoc.close();
    }
