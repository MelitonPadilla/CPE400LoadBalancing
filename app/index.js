import './main.css';
import Graph from './graph.js';
import Simulation from './graph.js';

main();

function main() {
    var graph = new Graph();
    document.getElementById("LB1").onclick = () => {
        graph.runWithoutAggregation();
    };
    document.getElementById("LB2").onclick = () => {
        graph.runWithAggregation();
    var simulation = new Simulation();
    document.getElementById("RR").onclick = () => {
    	simulation.runWithoutAggregation();
    };
    document.getElementById("LFU").onclick = () => {
        simulation.runWithAggregation();
    };
    document.getElementById("reset").onclick = () => {
        graph.reset();
    };
}
