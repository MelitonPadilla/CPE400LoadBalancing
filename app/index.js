import './main.css';
<<<<<<< Updated upstream
import Graph from './graph.js';
=======
import Simulation from './graph.js';
>>>>>>> Stashed changes

main();

function main() {
<<<<<<< Updated upstream
    var graph = new Graph();
    document.getElementById("LB1").onclick = () => {
        graph.runWithoutAggregation();
    };
    document.getElementById("LB2").onclick = () => {
        graph.runWithAggregation();
=======
    var simulation = new Simulation();
    document.getElementById("RR").onclick = () => {
    	simulation.runWithoutAggregation();
    };
    document.getElementById("LFU").onclick = () => {
        simulation.runWithAggregation();
>>>>>>> Stashed changes
    };
    document.getElementById("reset").onclick = () => {
        graph.reset();
    };
}
