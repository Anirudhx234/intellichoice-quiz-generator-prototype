export default function Subtraction(grade) {
        var first = Math.floor(Math.random() * 10);
        var second = Math.floor(Math.random() * 10);
        
        if (grade === "kinder" || grade === "first") {
            first = Math.floor(Math.random() * 10);
            second = Math.floor(Math.random() * 10);
        }
        else if (grade === "second" || grade === "third") {
            first = Math.floor(Math.random() * 100);
            second = Math.floor(Math.random() * 10);
        }
        else if (grade === "fourth" || grade === "fifth") {
            first = Math.floor(Math.random() * 100);
            second = Math.floor(Math.random() * 100);
        }
        if (second > first) {
            var x = first;
            first = second;
            second = x;
        }
        var questionText = "What is " + first + " - " + second + " equal to?";
        return [questionText, first, second, first - second];
}