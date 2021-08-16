export default function Division(grade) {
        var first = Math.floor(Math.random() * 10);
        var second = Math.floor(Math.random() * 10);
        
        if (grade === "kinder" || grade === "first") {
            first = Math.floor(Math.random() * 5);
            second = Math.floor(Math.random() * 5);
        }
        else if (grade === "second" || grade === "third") {
            first = Math.floor(Math.random() * 10);
            second = Math.floor(Math.random() * 10);
        }
        else if (grade === "fourth" || grade === "fifth") {
            first = Math.floor(Math.random() * 100);
            second = Math.floor(Math.random() * 10);
        }

        if (second === 0) {second++};
        var questionText = "What is " + first * second + " / " + second + " equal to?";
        return [questionText, first, second, first * second / second];
}