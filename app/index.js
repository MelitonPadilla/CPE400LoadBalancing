import './main.css';
import Graph from './graph.js';

main();

function main() {
    var graph = new Graph();
    document.getElementById("LB1").onclick = () => {
        graph.runWithoutAggregation();
    };
    document.getElementById("LB2").onclick = () => {
        graph.runWithAggregation();
    };
    document.getElementById("reset").onclick = () => {
        graph.reset();
    };
}
