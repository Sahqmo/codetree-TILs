#include <iostream>
using namespace std;

int main() {
    // 여기에 코드를 작성해주세요.
    cout << fixed;
    double ft;
    cin >> ft;

    cout.precision(1);
    cout << ft * 30.48;
    return 0;
}